import express from "express";
import dotenv from "dotenv";
import ConnectDatabase from "./DataBase/db.js";

// importing routes
import userRoute from "./routes/user.route.js";
import commentRoute from "./routes/comment.route.js";
import signupRoute from "./routes/signup.route.js";
const port = process.env.PORT;

const app = express();
dotenv.config();

// ROUTES
app.use("/api/users", userRoute);
app.use("/api/comment", commentRoute);
app.use("/api/signup", signupRoute);

app.get("/", (req, res) => {
  res.send("Home Route");
});

app.listen(port, async () => {
  await ConnectDatabase();
  console.log(`Server is running on port ${port}`);
});
