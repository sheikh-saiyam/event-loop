import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Events route");
});

router.post("/", async (req, res) => {
  res.send("Post Events route");
});

export default router;
