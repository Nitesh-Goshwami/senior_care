import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        const database_url = process.env.database_url;
        await mongoose.connect(database_url);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("Error connecting to MongoDB", err);
    }
}

export default connectDB;