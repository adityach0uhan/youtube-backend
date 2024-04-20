import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  videoURL: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    default: 0,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
    required: true,
  },
  Dislikes: {
    type: Number,
    default: 0,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
});
