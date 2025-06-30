import express from "express";
import usersCollection from "./../config/collections/usersCollection.js";
import bcrypt from "bcrypt";

const router = express.Router();
const SALT_ROUNDS = 10;

router.post("/register", async (req, res) => {
  // Get user data and validate it
  const { name, email, password, photoURL } = req.body;
  if (!name || !email || !password || !photoURL) {
    return res.status(400).json({
      success: false,
      message:
        "All fields are required! Fields: name, email, password, and photo URL",
    });
  }

  try {
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message:
          "An account with this email already exists. Please use a different email!",
      });
    }

    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
    const newUser = {
      name,
      email,
      passwordHash,
      photoURL,
      createdAt: new Date(),
    };

    const result = await usersCollection.insertOne(newUser);

    res.status(201).json({
      success: true,
      message: "User registered successfully!",
      userId: result.insertedId,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error!",
      error: "Something went wrong while registering. Please try again later!",
    });
  }
});

router.post("/login", (req, res) => {
  res.send("Login route");
});

export default router;
