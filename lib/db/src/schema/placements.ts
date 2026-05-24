import { pgTable, text, serial, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const placementsTable = pgTable("placements", {
  id: serial("id").primaryKey(),
  studentName: text("student_name").notNull(),
  university: text("university").notNull(),
  company: text("company").notNull(),
  role: text("role").notNull(),
  package: text("package").notNull(),
  type: text("type").notNull(),
  month: text("month").notNull(),
  avatarInitials: text("avatar_initials").notNull(),
  isVerified: boolean("is_verified").notNull().default(false),
});

export const insertPlacementSchema = createInsertSchema(placementsTable).omit({ id: true });
export type InsertPlacement = z.infer<typeof insertPlacementSchema>;
export type Placement = typeof placementsTable.$inferSelect;
