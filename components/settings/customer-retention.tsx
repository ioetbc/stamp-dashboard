import React from "react"
import { db } from "@/firebase-config"
import { zodResolver } from "@hookform/resolvers/zod"
import { doc, updateDoc } from "firebase/firestore"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { useAuth } from "@/hooks/use-auth"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/react-hook-form/form"

import { Input } from "../ui/input"

const FormSchema = z.object({
  threshold_days: z.number().min(0, {
    message: "Must be a minimum length of 0",
  }),
  retention_notification: z.string().min(5, {
    message: "Description must have a minimum length of 5",
  }),
})

interface CustomerRetentionProps {
  threshold_days?: number
  retention_notification?: string
}

export const CustomerRetention = ({
  threshold_days,
  retention_notification,
}: CustomerRetentionProps) => {
  const { uid } = useAuth()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      threshold_days,
      retention_notification,
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("data", data)
    if (!uid) return
    const merchantRef = doc(db, "merchants", uid)

    try {
      await updateDoc(merchantRef, { customer_retention: data })
      console.log("Document successfully updated!")
    } catch (error) {
      console.error("Error updating document: ", error)
    }
    form.reset(form.getValues())
  }

  return (
    <Card className="flex h-full flex-col justify-between">
      <div>
        <CardHeader>
          <CardTitle>Custom retention</CardTitle>
        </CardHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex grow flex-col"
          >
            <CardContent className="grow">
              <div className="my-4 grid w-full items-center gap-1.5">
                <FormField
                  control={form.control}
                  name="threshold_days"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lapsed day threshold</FormLabel>
                      <FormDescription>
                        After how many days should we send a notification?
                      </FormDescription>
                      <FormControl>
                        <Input
                          type="number"
                          min={0}
                          placeholder="shadcn"
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="my-4 grid w-full items-center gap-1.5">
                <FormField
                  control={form.control}
                  name="retention_notification"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Notification description</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>

            <CardFooter className="flex w-full justify-end">
              <Button
                type="submit"
                variant={form.formState.isDirty ? "default" : "outline"}
                disabled={!form.formState.isDirty}
              >
                Save
              </Button>
            </CardFooter>
          </form>
        </Form>
      </div>
    </Card>
  )
}
