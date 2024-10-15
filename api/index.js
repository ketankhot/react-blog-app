import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRoutes from "./Routes/user.route.js";
const app = express();
const port = process.env.PORT || 8000;
dotenv.config();

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
