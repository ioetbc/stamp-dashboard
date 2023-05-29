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

interface DetailsProps {
  name: string
  address: string
}

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  address: z.string().min(2, {
    message: "address must be at least 2 characters.",
  }),
})

export const Details = ({ name, address }: DetailsProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name,
      address,
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("data", data)
  }

  return (
    <Card className="flex h-full flex-col justify-between">
      <div>
        <CardHeader>
          <CardTitle>Details</CardTitle>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent>
              <div className="my-4 grid w-full items-center gap-1.5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormDescription>
                        This is the business name.
                      </FormDescription>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="my-4 grid w-full items-center gap-1.5">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormDescription>
                        This is the business address.
                      </FormDescription>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>

            <CardFooter className="ml-auto flex justify-end">
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
