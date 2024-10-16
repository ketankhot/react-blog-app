import express from "express";
import { signin, signup } from "../Controllers/auth.controller.js";

// Router
const router = express.Router();

// Create a post Request
router.post("/signup", signup);
router.post("/signin", signin);

export default router;
