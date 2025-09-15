import { validationResult } from "express-validator";
import Ship from "../model/shipModel.js";
import logger from "../utils/logger.js";

// GET /ships
export const getShips = async (req, res) => {
  try {
    const ships = await Ship.find();
    logger.info("Fetched all ships");
    res.status(200).json(ships);
  } catch (err) {
    logger.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// GET /ships/:id
export const getShipById = async (req, res) => {
  try {
    const ship = await Ship.findById(req.params.id);
    if (!ship) {
      logger.warn(`Ship not found: ID ${req.params.id}`);
      return res.status(404).json({ error: "Ship not found" });
    }
    res.json(ship);
  } catch (err) {
    logger.error(err.message);
    res.status(400).json({ error: "Invalid ID format" });
  }
};

// POST /ships
export const addShip = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    logger.error("Validation failed for new ship");
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, email } = req.body;
    const newShip = new Ship({ name, email });
    await newShip.save();
    logger.info(`New ship added: ${name}`);
    res.status(201).json(newShip);
  } catch (err) {
    logger.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// PUT /ships/:id
export const updateShip = async (req, res) => {
  try {
    const updatedShip = await Ship.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedShip) {
      logger.warn(`Ship not found: ID ${req.params.id}`);
      return res.status(404).json({ error: "Ship not found" });
    }
    logger.info(`Ship updated: ID ${req.params.id}`);
    res.json(updatedShip);
  } catch (err) {
    logger.error(err.message);
    res.status(400).json({ error: "Invalid data or ID" });
  }
};

// DELETE /ships/:id
export const deleteShip = async (req, res) => {
  try {
    const deletedShip = await Ship.findByIdAndDelete(req.params.id);
    if (!deletedShip) {
      logger.warn(`Ship not found: ID ${req.params.id}`);
      return res.status(404).json({ error: "Ship not found" });
    }
    logger.info(`Ship deleted: ID ${req.params.id}`);
    res.json(deletedShip);
  } catch (err) {
    logger.error(err.message);
    res.status(400).json({ error: "Invalid ID format" });
  }
};
