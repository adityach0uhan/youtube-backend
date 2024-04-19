import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
export default async function ConnectDatabase() {
    try {

        await mongoose.connect(process.env.MONGO_DB_URI)
        
    } catch (error) {
        
    }
} 