"use client"

import React from "react"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { Input } from "../ui/input"
import { Label } from "../ui/label"

export const Subscription = () => {
  return (
    <div>
      <div className="my-4 grid w-full max-w-md items-center gap-1.5">
        <Label htmlFor="cost">Cost</Label>
        <p className="text-sm text-muted-foreground">
          How much does the subscription cost per month?
        </p>
        <Input type="number" min={0} max={500} id="cost" placeholder="£45" />
      </div>

      <div className="my-4 grid w-full max-w-md items-center gap-1.5">
        <Label htmlFor="subscription-desc">Description</Label>
        <Input
          type="text"
          id="subscription-desc"
          placeholder="Enjoy 1 free coffee per day"
        />
      </div>

      <div className="my-4 grid w-full max-w-md items-center gap-1.5">
        <Label htmlFor="subscription-desc">Frequency</Label>
        <p className="text-sm text-muted-foreground">
          How often should the customer be able to redeem the reward?
        </p>

        <RadioGroup defaultValue="comfortable" className="my-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Daily</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Weekly</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Monthly</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}
