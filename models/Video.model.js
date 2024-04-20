import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema(
  {
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
      default: [],
    },
    thumbnail: {
      type: String,
      default: [],
    },
    videoURL: {
      type: String,
      default: [],
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    Dislikes: {
      type: Number,
      default: 0,
    },
    tags: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Video", VideoSchema);