import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
     type: String,
      required: true,
    },
    img: {
      type: String,
    },
    subcribers: {
      type: Number,
      default: 0,
    },
    subscribedChannels: {
      type: [String],
    },
  },
  { timestamps: true }
);
const userModel = mongoose.model("UserData", UserSchema);
 
export default userModel
