import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected.");
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};

export default connectDB;


