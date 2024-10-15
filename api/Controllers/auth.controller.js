import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
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
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if the username already exists in the database
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
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
    return res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
  }
};
