import mongoose from "mongoose";
const CommentsSchema = new mongoose.Schema({
  videoId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
},{timestamps:true});

const commentsModel = mongoose.model("Comments", CommentsSchema)
export default commentsModel