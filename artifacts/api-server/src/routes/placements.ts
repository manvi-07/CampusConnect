import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { placementsTable } from "@workspace/db/schema";
import { ListPlacementsResponse, GetPlacementStatsResponse } from "@workspace/api-zod";
import { eq } from "drizzle-orm";

const router: IRouter = Router();

router.get("/placements", async (req, res) => {
  const rows = await db.select().from(placementsTable);
  const data = ListPlacementsResponse.parse(rows);
  res.json(data);
});

router.get("/placements/stats", async (req, res) => {
  const all = await db.select().from(placementsTable);
  const totalPlacements = all.length;
  const internships = all.filter((p) => p.type === "internship").length;
  const fulltime = all.filter((p) => p.type === "fulltime").length;

  const companies = [...new Set(all.map((p) => p.company))].slice(0, 6);

  const data = GetPlacementStatsResponse.parse({
    totalPlacements,
    averagePackage: "18 LPA",
    topCompanies: companies,
    internships,
    fulltimeOffers: fulltime,
    highestPackage: "52 LPA",
  });

  res.json(data);
});

export default router;
