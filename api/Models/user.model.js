import mongoose from "mongoose";

// Schema is the Kind of rules or set of instructions to store information in the database
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Model is the representation of a collection in the database
const User = mongoose.model("User", UserSchema);

// Export the Model
export default User;
