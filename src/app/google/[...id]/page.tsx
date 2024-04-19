import { GoogleLogo } from "@/components/google-logo"
import { db } from "@/db"
import { google_wallet } from "@/db/schema"
import { eq } from "drizzle-orm"
import { notFound } from "next/navigation"

interface TemplatePageProps {
  params: {
    id: string[] | null
  }
}

export default async function GoogleWalletPage({ params }: TemplatePageProps) {
  const [tempId] = params.id || []

  const googleData = await db.query.google_wallet.findFirst({
    where: eq(google_wallet.templates_id, Number(tempId)),
  })

  // if (!googleData) {
  //   return notFound()
  // }

  return (
    <main className="container max-w-screen-xl p-6 h-screen space-y-6">
      <div className="flex items-center h-full  w-full justify-center ">
        <GoogleLogo tempId={tempId} data={googleData} />
      </div>
    </main>
  );
}
