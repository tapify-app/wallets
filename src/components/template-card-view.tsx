import React from "react"
import { Card, CardHeader, CardTitle } from "./ui/card"
import { Template } from "@/db/schema"
import Link from "next/link"

interface TemplateCardProps {
  template: Template
}

export default function TemplateCardView({ template }: TemplateCardProps) {
  return (
    <Link href={`/${template.id}`}>
      <Card className="w-[350px] cursor-pointer">
        <CardHeader>
          <CardTitle>{template.name}</CardTitle>
        </CardHeader>
      </Card>
    </Link>
  )
}
