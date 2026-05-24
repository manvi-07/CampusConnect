import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const feedPostsTable = pgTable("feed_posts", {
  id: serial("id").primaryKey(),
  authorName: text("author_name").notNull(),
  authorUniversity: text("author_university").notNull(),
  authorMajor: text("author_major").notNull(),
  avatarInitials: text("avatar_initials").notNull(),
  content: text("content").notNull(),
  likes: integer("likes").notNull().default(0),
  comments: integer("comments").notNull().default(0),
  timeAgo: text("time_ago").notNull(),
  tags: text("tags").array().notNull().default([]),
});

export const insertFeedPostSchema = createInsertSchema(feedPostsTable).omit({ id: true });
export type InsertFeedPost = z.infer<typeof insertFeedPostSchema>;
export type FeedPost = typeof feedPostsTable.$inferSelect;

export const eventsTable = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  organizer: text("organizer").notNull(),
  date: text("date").notNull(),
  time: text("time").notNull(),
  location: text("location").notNull(),
  attendees: integer("attendees").notNull().default(0),
  category: text("category").notNull(),
  description: text("description").notNull(),
});

export const insertEventSchema = createInsertSchema(eventsTable).omit({ id: true });
export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Event = typeof eventsTable.$inferSelect;

export const projectsTable = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  authorName: text("author_name").notNull(),
  university: text("university").notNull(),
  techStack: text("tech_stack").array().notNull().default([]),
  rolesNeeded: text("roles_needed").array().notNull().default([]),
  teamSize: integer("team_size").notNull().default(4),
  currentMembers: integer("current_members").notNull().default(1),
  status: text("status").notNull().default("open"),
});

export const insertProjectSchema = createInsertSchema(projectsTable).omit({ id: true });
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projectsTable.$inferSelect;
