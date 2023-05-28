"use client"

import React from "react"

import { Input } from "../ui/input"
import { Label } from "../ui/label"

export const Social = () => {
  return (
    <div>
      <div className="my-4 grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="instagram">Instagram</Label>
        <Input
          type="text"
          id="instagram"
          placeholder="https://instagram.com/rubberducker"
        />
      </div>

      <div className="my-4 grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="twitter">Twitter</Label>
        <Input
          type="text"
          id="twitter"
          placeholder="https://twitter.com/rubberducker"
        />
      </div>

      <div className="my-4 grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="Facebook">Facebook</Label>
        <Input
          type="text"
          id="Facebook"
          placeholder="https://facebook.com/rubberducker"
        />
      </div>
    </div>
  )
}
