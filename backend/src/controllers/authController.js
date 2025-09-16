import jwt from "jsonwebtoken";
import User from "../model/userModel.js";
import logger from "../utils/logger.js";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "1h",
  });
};

// POST /auth/register
export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    const user = await User.create({ username: "admin", email, password });

    logger.info(`User registered: ${email}`);

    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (err) {
    logger.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// POST /auth/login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    logger.info(`User logged in: ${email}`);

    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (err) {
    logger.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};
