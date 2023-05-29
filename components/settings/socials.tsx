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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/react-hook-form/form"

import { Input } from "../ui/input"

const FormSchema = z.object({
  instagram: z
    .string()
    .min(5, { message: "Must be a minimum length of 5" })
    .refine((value) => value.startsWith("instagram.com"), {
      message: "Instagram URL must start with instagram.com",
    }),
  twitter: z
    .string()
    .min(5, { message: "Description must have a minimum length of 5" })
    .refine((value) => value.startsWith("twitter.com"), {
      message: "Twitter URL must start with twitter.com",
    }),
})

interface SocialProps {
  instagram?: string
  twitter?: string
}

export const Social = ({ instagram, twitter }: SocialProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      instagram,
      twitter,
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("data", data)
  }
  return (
    <Card className="flex h-full flex-col justify-between">
      <div>
        <CardHeader>
          <CardTitle>Socials</CardTitle>
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
                  name="instagram"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Instagram</FormLabel>
                      <FormControl>
                        <Input
                          min={0}
                          placeholder="instagram.com/rubberducker"
                          {...field}
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
                  name="twitter"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Twitter</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="twitter.com/rubberducker"
                          {...field}
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
