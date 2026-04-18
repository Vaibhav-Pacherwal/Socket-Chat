import mongoose from "mongoose";
import dotenv from "dotenv";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected");
    } catch(err) {
        console.log("Failed to connect with mongoDB!", err);
    }
}

export default connectDB;