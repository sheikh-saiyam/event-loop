import express from "express";
import eventsCollection from "./../config/collections/eventsCollection.js";

const router = express.Router();

// Get events
router.get("/", async (req, res) => {
  const { search = "", filter = "" } = req.query;

  const query = {};

  // Search by title
  if (search) {
    query.title = { $regex: search, $options: "i" };
  }

  // Filter by date range
  const now = new Date();
  const startOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay());

  const startOfLastWeek = new Date(now);
  startOfLastWeek.setDate(now.getDate() - now.getDay() - 7);

  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);

  if (filter === "today") {
    query.date = startOfToday.toISOString().split("T")[0];
  } else if (filter === "this-week") {
    query.date = { $gte: startOfWeek.toISOString().split("T")[0] };
  } else if (filter === "last-week") {
    query.date = {
      $gte: startOfLastWeek.toISOString().split("T")[0],
      $lte: startOfWeek.toISOString().split("T")[0],
    };
  } else if (filter === "this-month") {
    query.date = { $gte: startOfMonth.toISOString().split("T")[0] };
  } else if (filter === "last-month") {
    query.date = {
      $gte: startOfLastMonth.toISOString().split("T")[0],
      $lte: endOfLastMonth.toISOString().split("T")[0],
    };
  }

  try {
    const events = await eventsCollection
      .find(query)
      .sort({ date: -1, time: -1 })
      .toArray();

    res.status(200).json(events);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch events!", error: err.message });
  }
});

// Post event
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
