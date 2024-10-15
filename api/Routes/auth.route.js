import express from "express";
import { signup } from "../Controllers/auth.controller.js";

// Router
const router = express.Router();

// Create a post Request
router.post("/signup", signup);

export default router;
