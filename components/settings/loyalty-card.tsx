"use client"

import React, { useState } from "react"

import { Input } from "../ui/input"
import { Label } from "../ui/label"

export const LoyaltyCard = () => {
  return (
    <div>
      <div className="my-4 grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="lapsed">No. stamps</Label>
        <p className="text-sm text-muted-foreground">
          How many stamps must a customer collect?
        </p>
        <Input type="number" min={0} max={15} id="lapsed" placeholder="10" />
      </div>

      <div className="my-4 grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="notification-desc">Reward</Label>
        <Input type="text" id="notification-desc" placeholder="Free coffee" />
      </div>
    </div>
  )
}
