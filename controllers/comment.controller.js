import commentsModel from '../models/Comments.model.js'
import videoModel from "../models/Video.model.js";
import { createError } from "../errors.js";
export const getComment = async (req, res, next) => {
  try {
    const comments = await commentsModel.find({ videoId: req.params.videoId });
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};

export const addComment = async (req, res, next) => {
  try {
    const newComment = new commentsModel({ ...req.body, userId: req.user.id });
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (error) {
    next(error);
  }
};

export const deleteComment = async (req, res, next) => {
  try {
    const comment = await commentsModel.findById(req.params.id);    
    const video = await videoModel.findById(comment.videoId);
    if (req.user.id === comment.userId || req.user.id === video.userId) {
      await commentsModel.findByIdAndDelete(req.params.id);
      res.status(200).json("Comment Deleted ")
    } else {
      res.json("You can delete only your comment or comment on your videos")
    }
  } catch (error) {
    next(error);
  }
};
