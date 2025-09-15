import express from "express";
import { body } from "express-validator";
import {
  getShips,
  getShipById,
  addShip,
  updateShip,
  deleteShip,
} from "../controllers/shipController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

const validateShip = [
  body("name").isString().withMessage("Name must be a string"),
  body("email").isEmail().withMessage("Email must be valid"),
];

router.get("/", getShips);
router.get("/:id", getShipById);

// Protected routes
router.post("/", protect, validateShip, addShip);
router.put("/:id", protect, updateShip);
router.delete("/:id", protect, deleteShip);

export default router;
