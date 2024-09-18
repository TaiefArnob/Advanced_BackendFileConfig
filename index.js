import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000; 

const connectDB = async () => {
  try {
    
    await mongoose.connect(process.env.MONGODB_URL);

    console.log('MongoDB Connected.');

   
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  } catch (error) {
    console.log('MongoDB connection error:', error);
  }
};

connectDB();
