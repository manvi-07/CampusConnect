import { Router, type IRouter } from "express";
import healthRouter from "./health.js";
import connectionsRouter from "./connections.js";
import profilesRouter from "./profiles.js";
import placementsRouter from "./placements.js";
import feedRouter from "./feed.js";
import waitlistRouter from "./waitlist.js";


const router: IRouter = Router();

router.use(healthRouter);
router.use(connectionsRouter);
router.use(profilesRouter);
router.use(placementsRouter);
router.use(feedRouter);
router.use(waitlistRouter);
export default router;
