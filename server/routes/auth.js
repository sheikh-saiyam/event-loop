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
      success: false,
      message: "Internal server error!",
      error: "Something went wrong while registering. Please try again later!",
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please enter both email and password. Required!" });
  }

  try {
    const user = await usersCollection.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ message: "No account found with this email!" });
    }

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) {
      return res
        .status(401)
        .json({ message: "Incorrect password. Please try again!" });
    }

    const token = user._id.toString();

    res.status(200).json({
      success: true,
      message: "Login successful!",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        photoURL: user.photoURL,
        createdAt: user.createdAt,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message:
        "An unexpected error occurred during login. Please try again later!",
    });
  }
});

export default router;
