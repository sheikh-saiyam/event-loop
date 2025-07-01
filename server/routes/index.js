import express from "express";
import authRoutes from "./auth.js";
import eventsRoute from "./events.js";

const router = express.Router();

// Root Api route
router.get("/", (req, res) => {
  res.send("Event-Loop Server Is Running");
});

// Auth and events route
router.use("/auth", authRoutes);
router.use("/events", eventsRoute);

export default router;
