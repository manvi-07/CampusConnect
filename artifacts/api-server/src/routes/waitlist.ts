import { Router } from "express";
import { db } from "@workspace/db";
import { waitlist } from "@workspace/db/schema";

const router = Router();

router.post("/waitlist", async (req, res) => {
  const { email } = req.body;

  // 🔒 Only allow your college domain
  if (!email || !email.endsWith("@gniindia.org")) {
    return res.status(400).json({
      error: "Only GNI college emails allowed",
    });
  }

  try {
    await db.insert(waitlist).values({ email });

    return res.json({
      message: "Successfully joined waitlist",
    });
  } catch (err) {
    return res.status(500).json({
      error: "Email might already exist",
    });
  }
});

export default router;