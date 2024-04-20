import mongoose from "mongoose";

const UserModel = new mongoose.Schema(
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
