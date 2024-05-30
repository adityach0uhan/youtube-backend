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
      type: [String],
      default: [],
    },
    dislikes: {
      type: [String],
      default: [],
    },
    tags: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const videoModel = mongoose.model("Video", VideoSchema);
export default videoModel