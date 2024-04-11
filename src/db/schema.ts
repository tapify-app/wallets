import { pgTable, text, uuid } from "drizzle-orm/pg-core"

export const templates = pgTable("templates", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
})

export type Template = typeof templates.$inferSelect

export const apple_wallet = pgTable("apple_wallet", {
  id: uuid("id").defaultRandom().primaryKey(),
  company_name: text("company_name").notNull(),
  templates_id: uuid("templates_id").references(() => templates.id, {
    onDelete: "cascade",
    onUpdate: "cascade",
  }),
})

export type AppleWallet = typeof apple_wallet.$inferInsert

export const google_wallet = pgTable("google_wallet", {
  id: uuid("id").defaultRandom().primaryKey(),
  company_name: text("company_name").notNull(),
  templates_id: uuid("templates_id").references(() => templates.id, {
    onDelete: "cascade",
    onUpdate: "cascade",
  }),
})

export type GoogleWallet = typeof apple_wallet.$inferInsert
