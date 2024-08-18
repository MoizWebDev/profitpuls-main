import dbConnect from "@/lib/mongodb";
import User from "@/Models/User";

export default async function register(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const { fullName, username, email, password } = req.body;

    try {
      // Directly store the password without hashing
      const newUser = new User({ fullName, username, email, password });
      await newUser.save();
      res.status(201).json({ success: true });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(400).json({ success: false, message: "Registration failed" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
