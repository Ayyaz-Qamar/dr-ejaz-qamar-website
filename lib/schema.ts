import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const appointments = pgTable("appointments", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  date: text("date").notNull(),
  reason: text("reason"),
  status: text("status").notNull().default("pending"),
  createdAt: text("created_at").notNull(),
});
