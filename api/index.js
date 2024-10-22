import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRoutes from "./Routes/user.route.js";
import AuthRoutes from "./Routes/auth.route.js";
import CookieParser from "cookie-parser";
const app = express();
const port = 3000;
dotenv.config();
app.use(express.json());
app.use(CookieParser());

// Connections to Mongoose
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Failed to connect to MongoDB");
    console.log(error);
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use("/api/user", UserRoutes);

// Auth Route
app.use("/api/auth", AuthRoutes);

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";
  res.status(statusCode).json({ success: false, statusCode, message });
});
