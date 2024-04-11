import { pgTable, text, uuid } from "drizzle-orm/pg-core"

export const templates = pgTable("templates", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
})

export const apple_wallet = pgTable("apple_wallet", {
  id: uuid("id").defaultRandom().primaryKey(),
  company_name: text("company_name").notNull(),
})

export const google_wallet = pgTable("google_wallet", {
  id: uuid("id").defaultRandom().primaryKey(),
  company_name: text("company_name").notNull(),
})
