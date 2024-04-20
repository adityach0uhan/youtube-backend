import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
export default async function ConnectDatabase() {
    try {

        const connection = await mongoose.connect(process.env.MONGO_DB_URI)
        if (connection) {
            console.log("Database Connected !!")
        } else {
            console.log("Database Not Connected ")
        }
        
    } catch (error) {
        console.log("Error Occurred in Database Connection ! ");
        console.log(error.message)
    }
} 