import express from "express";
import eventsCollection from "./../config/collections/eventsCollection.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// Get events
router.get("/", async (req, res) => {
  const { search = "", filter = "" } = req.query;
  const userEmail = req.query.email;

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

    const updatedEvents = events.map((event) => ({
      ...event,
      alreadyJoined: userEmail ? event.attendees?.includes(userEmail) : false,
    }));

    res.status(200).json(updatedEvents);
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

// Join event
router.patch("/join/:id", async (req, res) => {
  const eventId = req.params.id;
  const userEmail = req.body.email;

  if (!ObjectId.isValid(eventId)) {
    return res.status(400).json({ message: "Invalid event ID" });
  }

  try {
    // Check if user already joined
    const event = await eventsCollection.findOne({
      _id: new ObjectId(eventId),
      attendees: userEmail,
    });

    if (event) {
      return res
        .status(400)
        .json({ message: "You’ve already joined this event!" });
    }

    // Add email to attendees and increment attendeeCount atomically
    const updateResult = await eventsCollection.updateOne(
      { _id: new ObjectId(eventId) },
      {
        $push: { attendees: userEmail },
        $inc: { attendeeCount: 1 },
      }
    );

    if (updateResult.matchedCount === 0) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json({ message: "Joined successfully" });
  } catch (error) {
    console.error("Join error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
