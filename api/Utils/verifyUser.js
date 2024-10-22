//JWT
import jwt from "jsonwebtoken";
import { errorHandler } from "./utils.js";
export const verifyUser = (req, res, next) => {
  const token = req.cookies.access_token;

  // Check there is A token or Not
  if (!token) {
    return next(errorHandler(401, "Unauthorized"));
  }

  //If available then verify the Token
  jwt.verify(
    token,
    process.env.JWT_SECRET || "secretKetanKhot2511ddd99245",
    (err, user) => {
      if (err) {
        return next(errorHandler(401, "Unauthorized"));
      }
      req.user = user;
      next();
    }
  );
};
