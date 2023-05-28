"use client"

import React from "react"

import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"

export const Rewards = () => {
  return (
    <div>
      <div className="my-4 grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="lapsed">Frequency</Label>
        <p className="text-sm text-muted-foreground">
          How often should we send rewards to your customers?
        </p>
        <RadioGroup defaultValue="comfortable" className="my-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r-r-1" />
            <Label htmlFor="r-r-1">Every month</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r-r-2" />
            <Label htmlFor="r-r-2">Every 2 months</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r-r-3" />
            <Label htmlFor="r-r-3">Every 3 months</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="my-4 grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="notification-desc">Notification description</Label>
        <Input
          type="text"
          id="notification-desc"
          placeholder="Enjoy a free coffee on us"
        />
      </div>
    </div>
  )
}
