import express from "express";
import authRoutes from "./auth.js";
const router = express.Router();

// Root Api route
router.get("/", (req, res) => {
  res.send("Event-Loop Server Is Running");
});

router.use("/auth", authRoutes);

export default router;
