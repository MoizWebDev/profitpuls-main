import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // This will store plain text
});

// Ensure no middleware is hashing the password
export default mongoose.models.User || mongoose.model("User", UserSchema);
