import express from "express";
import dotenv from "dotenv";
import ConnectDatabase from "./DataBase/db.js";
// importing routes
import userRoute from "./routes/user.route.js";
import commentRoute from "./routes/comment.route.js";
import signupRoute from "./routes/signup.route.js";
import loginRoute from './routes/login.route.js'

const port = process.env.PORT;
const app = express();
dotenv.config();
// Middleware to parse JSON bodies
app.use(express.json())
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));


app.use("/api/users", userRoute);
app.use("/api/comment", commentRoute);
app.use("/api/login", loginRoute);
app.use("/api/signup", signupRoute);

app.get("/", (req, res) => {
  res.send("Home Route");
});

app.listen(port, async () => {
  await ConnectDatabase();
  console.log(`Server is running on port ${port}`);
});
