import { AppleLogo } from "@/components/apple-logo"
import { db } from "@/db"
import { apple_wallet } from "@/db/schema"
import { eq } from "drizzle-orm"
import { notFound } from "next/navigation"

interface TemplatePageProps {
  params: {
    id: string[] | null
  }
}

export default async function AppleWalletPage({ params }: TemplatePageProps) {
  const [tempId, appleWalletId] = params.id || []

  const appleData = await db.query.apple_wallet.findFirst({
    where: eq(apple_wallet.id, appleWalletId),
  })

  if (!appleData) {
    return notFound()
  }

  return (
    <main className="container max-w-screen-xl p-6 h-screen space-y-6">
      <div className="flex items-center h-full  w-full justify-center ">
        <AppleLogo data={appleData} />
      </div>
    </main>
  )
}
