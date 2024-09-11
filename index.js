// const express = require("express");
// const app = express();
// require("dotenv").config();

// const connectDB = require("./dbConnection/index");
// connectDB();

// const path = require("path");
// const foodRoutes = require("./routes/index");
// const UserRoutes = require("./routes/UserRoutes");

// const cors = require("cors");
// app.use(cors());
// app.use(express.json());

// // Serve SVG files with the correct Content-Type
// app.use(
//   "/uploads",
//   express.static(path.join(__dirname, "uploads"), {
//     setHeaders: (res, path, stat) => {
//       if (path.endsWith(".svg")) {
//         res.set("Content-Type", "image/svg+xml");
//       }
//     },
//   })
// );

// app.use("/profile", express.static(path.join(__dirname, "profile")));

// app.use("/uploads", express.static("uploads"));

// // Foods Route
// app.use("/api", foodRoutes);

// // Login & Signup Route
// app.use("/api", UserRoutes);

// app.get("/", (req, res) => {
//   app.use(express.static(path.resolve(__dirname, "frontend", "dist")));
//   res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
// });

// module.exports = (req, res) => {
//   res.status(200).json({ message: "Hello from serverless function!" });
// };

// const port = process.env.PORT || 5000;
// app.listen(port, () =>
//   console.log(`Server is running on port: http://localhost:${port}`)
// );

const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./dbConnection/index");
const foodRoutes = require("./routes/index");
const UserRoutes = require("./routes/UserRoutes");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Serve SVG files with the correct Content-Type
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"), {
    setHeaders: (res, path, stat) => {
      if (path.endsWith(".svg")) {
        res.set("Content-Type", "image/svg+xml");
      }
    },
  })
);

app.use("/profile", express.static(path.join(__dirname, "profile")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Foods Route
app.use("/api", foodRoutes);

// Login & Signup Route
app.use("/api", UserRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

// Export the request handler for Vercel
module.exports = (req, res) => {
  app(req, res);
};
