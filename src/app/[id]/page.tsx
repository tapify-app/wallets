import AppleQr from "@/components/apple-qr"
import GoogleQr from "@/components/google-qr"
import { db } from "@/db"
import { apple_wallet, google_wallet, templates } from "@/db/schema"
import { eq } from "drizzle-orm"
import { notFound } from "next/navigation"

interface TemplatePageProps {
  params: {
    id: Number | null
  }
}

export default async function WalletsQRPage({ params }: TemplatePageProps) {
  if (!params.id) {
    return notFound()
  }

  const templateData = await db
    .select()
    .from(templates)
    .leftJoin(apple_wallet, eq(apple_wallet.templates_id, templates.id))
    .leftJoin(google_wallet, eq(google_wallet.templates_id, templates.id))
    .where(eq(templates.id, Number(params.id)))
    .then((row) => row[0])
    
  if (!templateData) {
    return notFound()
  }

  return (
    <main className="container max-w-screen-xl p-6 space-y-6">
      <div className="flex w-full gap-4">
        <AppleQr id={params.id}/>
        <GoogleQr id={params.id}/>
      </div>
    </main>
  )
}
