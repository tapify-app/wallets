import React from "react"
import { Card, CardHeader, CardTitle } from "./ui/card"
import { Template } from "@/db/schema"
import Link from "next/link"

interface TemplateCardProps {
  template: Template
}

export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <Link href={`/temp/${template.id}`}>
      <Card className="w-[350px] cursor-pointer">
        <CardHeader>
          <CardTitle className="capitalize">{template.name}</CardTitle>
        </CardHeader>
      </Card>
    </Link>
  )
}
