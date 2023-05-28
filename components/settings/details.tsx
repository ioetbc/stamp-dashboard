import React from "react"

import { Input } from "../ui/input"
import { Label } from "../ui/label"

export const Details = () => {
  return (
    <div>
      <div className="my-4 grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" placeholder="rubberducker" />
      </div>

      <div className="my-4 grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="address">Address</Label>
        <Input
          type="text"
          id="address"
          placeholder="76 Bushey Hill Road, London, E5 8QJ"
        />
      </div>
      <div className="my-4 grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="picture">Logo</Label>
        <Input id="picture" type="file" />
      </div>
    </div>
  )
}
