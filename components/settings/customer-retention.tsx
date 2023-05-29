import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

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
  lapsedDayThreshold: z.number().min(0, {
    message: "Must be a minimum length of 0",
  }),
  notificationDescription: z.string().min(5, {
    message: "Description must have a minimum length of 5",
  }),
})

interface CustomerRetentionProps {
  lapsedDayThreshold?: number
  notificationDescription?: string
}

export const CustomerRetention = ({
  lapsedDayThreshold,
  notificationDescription,
}: CustomerRetentionProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      lapsedDayThreshold,
      notificationDescription,
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("data", data)
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
                  name="lapsedDayThreshold"
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
                  name="notificationDescription"
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
