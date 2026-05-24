import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const connectionsTable = pgTable("connections", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  university: text("university").notNull(),
  major: text("major").notNull(),
  year: text("year").notNull(),
  skills: text("skills").array().notNull().default([]),
  avatarInitials: text("avatar_initials").notNull(),
  mutualConnections: integer("mutual_connections").notNull().default(0),
  connectedSince: text("connected_since").notNull(),
});

export const insertConnectionSchema = createInsertSchema(connectionsTable).omit({ id: true });
export type InsertConnection = z.infer<typeof insertConnectionSchema>;
export type Connection = typeof connectionsTable.$inferSelect;

export const suggestedConnectionsTable = pgTable("suggested_connections", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  university: text("university").notNull(),
  major: text("major").notNull(),
  year: text("year").notNull(),
  skills: text("skills").array().notNull().default([]),
  avatarInitials: text("avatar_initials").notNull(),
  matchScore: integer("match_score").notNull().default(0),
  matchReasons: text("match_reasons").array().notNull().default([]),
  mutualConnections: integer("mutual_connections").notNull().default(0),
});

export const insertSuggestedConnectionSchema = createInsertSchema(suggestedConnectionsTable).omit({ id: true });
export type InsertSuggestedConnection = z.infer<typeof insertSuggestedConnectionSchema>;
export type SuggestedConnection = typeof suggestedConnectionsTable.$inferSelect;
