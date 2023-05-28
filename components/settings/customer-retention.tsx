import React from "react"

import { Input } from "../ui/input"
import { Label } from "../ui/label"

export const CustomerRetention = () => {
  return (
    <div>
      <div className="my-4 grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="lapsed">Lapsed day threshold</Label>
        <p className="text-sm text-muted-foreground">
          After how many days should we send a notification?
        </p>
        <Input type="number" min={0} id="lapsed" placeholder="30" />
      </div>

      <div className="my-4 grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="address">Notification description</Label>
        <Input
          type="text"
          id="address"
          maxLength={60}
          placeholder="You're missed"
        />
      </div>
    </div>
  )
}
