import { AppleLogo } from "@/components/apple-logo"
import { GoogleLogo } from "@/components/google-logo"
import { db } from "@/db"
import { apple_wallet, google_wallet } from "@/db/schema"
import { eq } from "drizzle-orm"
import { notFound } from "next/navigation"

interface TemplatePageProps {
  params: {
    id: string[] | null
  }
}

export default async function GoogleWalletPage({ params }: TemplatePageProps) {
  const [tempId, googleWalletId] = params.id || []

  const name = await db.query.google_wallet.findFirst({
    where: eq(google_wallet.id, googleWalletId),
    columns: {
      company_name: true,
    },
  })

  if (!name) {
    return notFound()
  }

  return (
    <main className="container max-w-screen-xl p-6 h-screen space-y-6">
      <div className="flex items-center h-full  w-full justify-center ">
        <GoogleLogo tempId={tempId} company_name={name.company_name} />
      </div>
    </main>
  )
}
