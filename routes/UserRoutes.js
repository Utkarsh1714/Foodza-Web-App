const express = require("express");
const multer = require("multer");
const path = require("path"); // Import path to handle file paths
const {
  registerUser,
  loginUser,
  getUserProfile,
} = require("../controller/userController");
const auth = require("../middleware/auth");

const router = express.Router();

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "profile/"); // Set uploads directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Save file with timestamp
  },
});

// Initialize upload middleware
const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 }, // Limit file size to 1MB
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/; // Allowed file extensions
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb(new Error("Only images are allowed"));
    }
  },
});

// Registration Route
// router.post("/register", upload.single("profilePicture"), registerUser);
router.post("/register", (req, res, next) => {
  upload.single("profilePicture")(req, res, (err) => {
    if (err) {
      return res.status(400).json({ msg: err.message });
    }
    // Proceed with the registration process
    registerUser(req, res);
  });
});

// Login Route
router.post("/login", loginUser);

// Get Profile Route
router.get("/profile", auth, getUserProfile);

module.exports = router;
