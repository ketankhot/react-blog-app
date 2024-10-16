import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../Utils/utils.js";
import jwt from "jsonwebtoken";
// import cookie from "cookie";

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
      .json({ success: true, message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  try {
    // Destructure the data coming from the server
    const { email, password } = req.body;
    if (!email || !password || email === "" || password === "") {
      next(errorHandler(400, "Email and password are required"));
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return next(errorHandler(404, "User not found"));
    }

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(errorHandler(401, "Invalid credentials"));
    }

    // Generate and send a JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET || "secretKetanKhot2511ddd99245",
      { expiresIn: "1h" }
    );

    // Removw the Password field
    const { password: pass, ...rest } = user._doc;

    res
      .status(200)
      .cookie("acesss_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  const { email, name, googlePhotoURL } = req.body;
  try {
    // Check if the user already exists in the database
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET || "secretKetanKhot2511ddd99245"
      );
      const { password, ...rest } = user._doc;
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    } else {
      // Generate the Random Password
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      // Hash the Password
      const hashedPassword = await bcrypt.hash(generatedPassword, 10);
      // Create a new user
      const newUser = new User({
        username:
          name.toLowerCase().split(" ").join("") +
          Math.random().toString(9).slice(-4),
        email,
        password: hashedPassword,
        profilePic: googlePhotoURL,
      });
      // Save the user to the database
      await newUser.save();
      const token = jwt.sign(
        { id: newUser._id },
        process.env.JWT_SECRET || "secretKetanKhot2511ddd99245"
      );
      const { password, ...rest } = newUser._doc;
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};
