import express from "express";
import dotenv from "dotenv";
import ConnectDatabase from 
dotenv.config();
const app = express();
const port = process.env.PORT;


app.get('/', (req,res) => {
    res.send("Home Route")
})



app.listen(port, () => {
    await 
    console.log(`Server is running on port ${port}`)
})