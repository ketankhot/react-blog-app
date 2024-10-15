import express from "express";
import { test } from "../Controllers/user.controller.js";

// Defining the Router
const router = express.Router();

//GET Request
router.get("/test", test);

// Exporting the Router to Use in the Main File
export default router;
