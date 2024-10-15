import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../Utils/utils.js";

export const signup = async (req, res, next) => {
  try {
    // Destructure the data coming from the server
    const { username, email, password } = req.body;

    // Validate the data
    if (
      !username ||
      !email ||
      !password ||
      username === "" ||
      email === "" ||
      password === ""
    ) {
      next(errorHandler(400, "All fields are required"));
    }

    // Check if the username already exists in the database
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      next(errorHandler(409, "Username already exists"));
    }

    // Hashin the Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();
    return res
      .status(200)
      .json({ success: false, message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};
