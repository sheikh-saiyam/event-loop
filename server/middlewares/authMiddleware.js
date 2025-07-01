import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
import usersCollection from "../config/collections/usersCollection.js";

export async function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ success: false, message: "No token provided!" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await usersCollection.findOne({
      _id: new ObjectId(decoded.id),
    });

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User not found!" });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: "Invalid token!" });
  }
}
