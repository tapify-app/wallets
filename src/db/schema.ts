import { integer, pgTable, serial, text, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const templates = pgTable("templates", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});

export type Template = typeof templates.$inferSelect;

export const apple_wallet = pgTable("apple_wallet", {
  id: serial("id").primaryKey(),
  logo_url: text("logo_url").notNull(),
  strip_url: text("strip_url").notNull(),
  card_color: text("card_color").notNull(),
  text_color: text("text_color").notNull(),
  name: text("name").notNull(),
  designation: text("designation").notNull(),
  qr_value: text("qr_value").notNull(),
  company_name: text("company_name").notNull(),
  icon_url: text("icon_url").notNull(),
  templates_id: integer("templates_id").references(() => templates.id, {
    onDelete: "cascade",
    onUpdate: "cascade",
  }),
});

export type NewAppleWallet = typeof apple_wallet.$inferInsert;
export type AppleWallet = typeof apple_wallet.$inferSelect;
export const AppleWalletSchema = createInsertSchema(apple_wallet);

export const google_wallet = pgTable("google_wallet", {
  id: serial("id").primaryKey(),
  logo_url: text("logo_url").notNull(),
  strip_url: text("strip_url").notNull(),
  card_color: text("card_color").notNull(),
  text_color: text("text_color").notNull(),
  company_name: text("company_name").notNull(),
  name: text("name").notNull(),
  designation: text("designation").notNull(),
  qr_value: text("qr_value").notNull(),
  icon_url: text("icon_url").notNull(),
  templates_id: integer("templates_id").references(() => templates.id, {
    onDelete: "cascade",
    onUpdate: "cascade",
  }),
});

export type GoogleWallet = typeof apple_wallet.$inferInsert;
