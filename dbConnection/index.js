const mongoose = require("mongoose");

const connectDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Connected to Database !");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
