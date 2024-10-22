import express from "express";
import { test, updateUser } from "../Controllers/user.controller.js";
import { verifyUser } from "../Utils/verifyUser.js";

// Defining the Router
const router = express.Router();

//GET Request
router.get("/test", test);
// Update user Route
router.put("/update/:userId", verifyUser, updateUser);

// Exporting the Router to Use in the Main File
export default router;
