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
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/react-hook-form/form"

import { Input } from "../ui/input"

interface DetailsProps {
  value?: string
  frequency_days?: number
}

const FormSchema = z.object({
  value: z.string().min(10, {
    message: "Notification must be at least 10 characters.",
  }),
  frequency_days: z.number().min(0, {
    message: "Must be above 0",
  }),
})

export const Perks = ({ value, frequency_days }: DetailsProps) => {
  const { uid } = useAuth()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      value,
      frequency_days,
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("data", data)
    if (!uid) return
    const merchantRef = doc(db, "merchants", uid)

    try {
      await updateDoc(merchantRef, { perk: data })
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
          <CardTitle>Perks</CardTitle>
          <CardDescription>
            Keep your customers coming back, with random rewards throughout the
            month.
          </CardDescription>
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
                  name="value"
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
                <FormField
                  control={form.control}
                  name="frequency_days"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        How often should we send perks to customers
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="30"
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
