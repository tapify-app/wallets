import Header from "@/components/header"
import TemplateCard from "@/components/template-card"
import { db } from "@/db"

export default async function Home() {
  const templateData = await db.query.templates.findMany({})

  return (
    <main className=" container max-w-screen-xl p-6 space-y-6">
      <Header />
      <div className="flex gap-2 flex-wrap">
        {templateData.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </main>
  )
}
