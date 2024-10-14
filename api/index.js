import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
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

app.get("/", (req, res) => res.send("Blog Application...!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
