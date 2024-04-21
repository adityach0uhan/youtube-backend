import express from "express";
import dotenv from "dotenv";
import ConnectDatabase from './DataBase/db.js'
dotenv.config();
import userRoute from './routes/user.route.js'
import commentRoute from "./routes/comment.route.js";

const app = express();
const port = process.env.PORT;

app.use('/api/users', userRoute);
app.use('/api/comment', commentRoute);


app.get('/', (req,res) => {
    res.send("Home Route")
})



app.listen(port, async() => {
    await ConnectDatabase();
    console.log(`Server is running on port ${port}`)
})