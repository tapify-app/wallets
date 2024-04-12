import { faker } from "@faker-js/faker"
import { db } from "."
import { templates, apple_wallet, google_wallet } from "./schema"

async function seedData() {
  // Create 3 templates
  const templateIds = await Promise.all(
    Array.from({ length: 3 }).map(async () => {
      const [template] = await db
        .insert(templates)
        .values({
          name: faker.word.adjective(),
        })
        .returning()
      return template.id
    }),
  )

  // Create apple_wallet and google_wallet for each template
  for (const templateId of templateIds) {
    // Create apple_wallet
    await db.insert(apple_wallet).values({
      card_color: faker.color.rgb(),
      text_color: faker.color.rgb(),
      company_name: faker.company.name(),
      templates_id: templateId,
    })

    // Create google_wallet
    await db.insert(google_wallet).values({
      card_color: faker.color.rgb(),
      text_color: faker.color.rgb(),
      company_name: faker.company.name(),
      templates_id: templateId,
    })
  }

  console.log("Data seeded successfully")
}

seedData().catch(console.error)
