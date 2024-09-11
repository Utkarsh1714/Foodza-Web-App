const express = require("express");
const multer = require("multer");
const Food = require("../models/Food");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Upload food image
router.post("/upload", upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  try {
    const newFood = new Food({
      name: req.body.name,
      image: req.file.filename,
      rating: req.body.rating,
      price: req.body.price,
    });
    await newFood.save();
    res.json(newFood);
  } catch (error) {
    res.status(500).send("Error saving food item.");
  }
});

// Fetch all food images
router.get("/foods", async (req, res) => {
  const foods = await Food.find();
  res.json(foods);
});

module.exports = router;
