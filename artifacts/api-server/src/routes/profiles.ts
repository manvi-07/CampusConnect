import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { profilesTable } from "@workspace/db/schema";
import { ListProfilesResponse } from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/profiles", async (req, res) => {
  const rows = await db.select().from(profilesTable);
  const data = ListProfilesResponse.parse(rows);
  res.json(data);
});

export default router;
