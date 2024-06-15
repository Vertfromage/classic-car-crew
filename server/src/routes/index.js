const express = require("express");
const router = express.Router();
const userController = require("../controllers/User");
const carController = require("../controllers/Car");
const updateController = require("../controllers/Update");

const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config(); // https://appdividend.com/2022/03/05/what-is-process-env-in-node-js/
}

const mongoURI = process.env.MONGODB_URI;

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Home page route
router.get("/", (req, res) => {
  res.send("Welcome to the Online Car Show API");
});

// Health check or API status route
router.get("/status", (req, res) => {
  res.status(200).json({ status: "OK", message: "Service is up and running!" });
});

// User routes
router.get("/user/:id", userController.getUser);
router.post("/users/register", userController.registerUser);
router.put("/users/update", userController.updateUser);
router.delete("/users/delete", userController.deleteUser);

// Car routes
router.post("/cars", carController.addCar);
router.get("/cars/:id", carController.getCar);
router.put("/cars/:id", carController.updateCar);
router.delete("/cars/:id", carController.deleteCar);

// Update routes
router.post("/updates", updateController.addUpdate);
router.get("/updates/:carId", updateController.getUpdates);
router.delete("/updates/:id", updateController.deleteUpdate);

module.exports = router;
