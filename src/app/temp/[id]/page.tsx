import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { notFound } from "next/navigation"
import React from "react"

interface TemplatePageProps {
  params: {
    id: string | null
  }
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  if (!params.id) {
    return notFound()
  }

  return (
    <main className=" container max-w-screen-xl p-6 space-y-6">
      <div className="flex w-full gap-4">
        <Link href={`/apple/${params.id}`}>
          <Card className="w-full cursor-pointer">
            <CardHeader>
              <CardTitle>Apple Wallet</CardTitle>
            </CardHeader>
          </Card>
        </Link>
        <Link href={`/google/${params.id}`}>
          <Card className="w-full cursor-pointer">
            <CardHeader>
              <CardTitle>Google Wallet</CardTitle>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </main>
  )
}
