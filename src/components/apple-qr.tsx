"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React from "react"
import QRCode from "react-qr-code"

export default function AppleQr() {
  const [text, setText] = React.useState("")

  const handleChange = (event: any) => {
    setText(event.target.value)
  }

  return (
    <Card className="w-full cursor-pointer">
      <CardHeader>
        <CardTitle>Apple Wallet</CardTitle>
      </CardHeader>
      <CardContent>
        <QRCode value={text} />
        <div className="mt-4 space-y-2">
          <Label>Type your name</Label>
          <Input type="text" value={text} onChange={handleChange} />
        </div>
      </CardContent>
    </Card>
  )
}
