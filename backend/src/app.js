import express from "express";
import rateLimit from "express-rate-limit";
import shipRoutes from "./routes/shipRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import logger from "./utils/logger.js";

import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// Rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  handler: (req, res) => {
    logger.warn(`Rate limit exceeded for IP: ${req.ip}`);
    res.status(429).json({ error: "Too many requests, please try again later." });
  },
});
app.use(limiter);

// Routes
app.use("/ships", shipRoutes);
app.use("/auth", authRoutes);

// Health check
app.get("/", (req, res) => res.send("Ship API with MongoDB + JWT Running 🚢"));

// DB connect

export {  app }
