import React from "react"
import { Card, CardHeader, CardTitle } from "./ui/card"

export default function TemplateCard() {
  return (
    <Card className="w-[350px] cursor-pointer">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
      </CardHeader>
    </Card>
  )
}
