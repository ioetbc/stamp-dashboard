import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

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
  rewardsNotification?: string
}

const FormSchema = z.object({
  rewardsNotification: z.string().min(10, {
    message: "Notification must be at least 10 characters.",
  }),
})

export const Rewards = ({ rewardsNotification }: DetailsProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      rewardsNotification,
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("data", data)
  }
  return (
    <Card className="flex h-full flex-col justify-between">
      <div>
        <CardHeader>
          <CardTitle>Rewards</CardTitle>
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
                  name="rewardsNotification"
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
