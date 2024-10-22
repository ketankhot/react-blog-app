import User from "../models/user.model.js";
import { errorHandler } from "../Utils/utils.js";
import bcryptjs from "bcryptjs";

export const test = (req, res) => {
  res.status(200).json({ message: "This is a test route!" });
};

export const updateUser = async (req, res, next) => {
  console.log(req.user.id);
  const id = req.params.userId.replace(":", "");
  console.log(id);
  if (req.user.id !== id) {
    return next(
      errorHandler(403, "You do not have permission to update this user.")
    );
  }
  if (req.body.password) {
    if (req.body.password < 6) {
      return next(errorHandler(400, "Password must be at least 6 characters"));
    }
  }
  req.body.password = bcryptjs.hashSync(req.body.password, 10);
  if (req.body.username) {
    if (req.body.username.length < 7 && req.body.username.length > 20) {
      return next(
        errorHandler(400, "Username must be between 7 and 20 characters")
      );
    }
    if (req.body.username.includes(" ")) {
      return next(errorHandler(400, "Username cannot contain spaces"));
    }
    if (req.body.username !== req.body.username.toLowerCase()) {
      return next(errorHandler(400, "Username must be in lowercase"));
    }
    if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
      return next(
        errorHandler(400, "Username can only contain the letters and numbers")
      );
    }
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.userId,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            profilePic: req.body.profilePic,
            password: req.body.password,
          },
        },
        { new: true }
      );
      const { password, ...rest } = updateUser._doc;
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  }
};
