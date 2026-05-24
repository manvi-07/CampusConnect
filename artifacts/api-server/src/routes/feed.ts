import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { feedPostsTable, eventsTable, projectsTable } from "@workspace/db/schema";
import {
  ListFeedPostsResponse,
  ListEventsResponse,
  ListProjectsResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/feed/posts", async (req, res) => {
  const rows = await db.select().from(feedPostsTable);
  const data = ListFeedPostsResponse.parse(rows);
  res.json(data);
});

router.get("/feed/events", async (req, res) => {
  const rows = await db.select().from(eventsTable);
  const data = ListEventsResponse.parse(rows);
  res.json(data);
});

router.get("/feed/projects", async (req, res) => {
  const rows = await db.select().from(projectsTable);
  const data = ListProjectsResponse.parse(rows);
  res.json(data);
});

export default router;
