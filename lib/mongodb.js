import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://admin:nida1984@cluster0.cs7tw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectMongo() {
  if (cached.conn && cached.conn.readyState === 1) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI)
      .then((mongoose) => {
        console.log("MongoDB connected");
        return mongoose;
      })
      .catch((error) => {
        console.error("MongoDB connection error:", error.message);
        throw error;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectMongo;
