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
  numberOfStamps: z.number().min(1, {
    message: "Must have a min of 1 stamp",
  }),
  reward: z.string().min(5, {
    message: "Description must have a minimum of 5 characters",
  }),
})

interface LoyaltyCardProps {
  numberOfStamps?: number
  reward?: string
}
export const LoyaltyCard = ({ numberOfStamps, reward }: LoyaltyCardProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      numberOfStamps,
      reward,
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("data", data)
  }
  return (
    <Card className="flex h-full flex-col justify-between">
      <div>
        <CardHeader>
          <CardTitle>Loyalty card</CardTitle>
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
                  name="numberOfStamps"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>No. stamps</FormLabel>
                      <FormDescription>
                        How many stamps must a customer collect?
                      </FormDescription>
                      <FormControl>
                        <Input
                          type="number"
                          min={0}
                          placeholder="10"
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
                  name="reward"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Reward</FormLabel>
                      <FormDescription>
                        What will you reward your customers with?
                      </FormDescription>
                      <FormControl>
                        <Input min={0} placeholder="Free coffee" {...field} />
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
