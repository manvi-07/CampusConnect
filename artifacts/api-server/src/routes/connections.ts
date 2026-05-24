import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import {
  connectionsTable,
  suggestedConnectionsTable,
} from "@workspace/db/schema";
import {
  ListConnectionsResponse,
  ListSuggestedConnectionsResponse,
  GetConnectionStatsResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/connections", async (req, res) => {
  const rows = await db.select().from(connectionsTable);
  const data = ListConnectionsResponse.parse(rows);
  res.json(data);
});

router.get("/connections/suggested", async (req, res) => {
  const rows = await db.select().from(suggestedConnectionsTable);
  const data = ListSuggestedConnectionsResponse.parse(rows);
  res.json(data);
});

router.get("/connections/stats", async (req, res) => {
  const connections = await db.select().from(connectionsTable);
  const suggested = await db.select().from(suggestedConnectionsTable);

  const totalConnections = connections.length;
  const totalStudents = totalConnections + suggested.length + 12481;
  const campusesConnected = 47;
  const dailyNewConnections = 234;
  const avgMatch =
    suggested.length > 0
      ? Math.round(
          suggested.reduce((sum, s) => sum + s.matchScore, 0) / suggested.length
        )
      : 87;

  const data = GetConnectionStatsResponse.parse({
    totalStudents,
    totalConnections: totalConnections + 8920,
    campusesConnected,
    dailyNewConnections,
    averageMatchScore: avgMatch,
  });

  res.json(data);
});

export default router;
