import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const profilesTable = pgTable("profiles", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  university: text("university").notNull(),
  major: text("major").notNull(),
  year: text("year").notNull(),
  bio: text("bio").notNull(),
  skills: text("skills").array().notNull().default([]),
  avatarInitials: text("avatar_initials").notNull(),
  connections: integer("connections").notNull().default(0),
  openToCollaborate: boolean("open_to_collaborate").notNull().default(true),
});

export const insertProfileSchema = createInsertSchema(profilesTable).omit({ id: true });
export type InsertProfile = z.infer<typeof insertProfileSchema>;
export type Profile = typeof profilesTable.$inferSelect;
