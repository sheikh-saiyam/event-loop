import express from "express";
import eventsCollection from "./../config/collections/eventsCollection.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Events route");
});

router.post("/", async (req, res) => {
  try {
    const {
      title,
      date,
      time,
      location,
      description,
      attendeeCount = 0,
      attendees = [],
      postedBy,
    } = req.body;

    if (
      !title ||
      !date ||
      !time ||
      !location ||
      !description ||
      !postedBy?.email ||
      !postedBy?.name
    ) {
      return res
        .status(400)
        .json({ message: "All required fields must be provided!" });
    }

    const newEvent = {
      title,
      date,
      time,
      location,
      description,
      attendeeCount,
      attendees,
      postedBy,
      createdAt: new Date(),
    };

    const result = await eventsCollection.insertOne(newEvent);

    res.status(201).json({
      success: true,
      message: "Event added successfully!",
      eventId: result.insertedId,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to add event. Please try again!" });
  }
});

export default router;
