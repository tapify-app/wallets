import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import React from "react"

export default function Page() {
  return (
    <div className="flex w-full gap-4">
      <Card className="w-full cursor-pointer">
        <CardHeader>
          <CardTitle>Apple Wallet</CardTitle>
        </CardHeader>
      </Card>
      <Card className="w-full cursor-pointer">
        <CardHeader>
          <CardTitle>Google Wallet</CardTitle>
        </CardHeader>
      </Card>
    </div>
  )
}
