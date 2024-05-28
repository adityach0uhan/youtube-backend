import commentsModel from '../models/Comments.model'

export const getComment = async (req, res, next) => {
  try {
    const comments = await commentsModel.find();
    res.status(200);
  } catch (error) {
    next(error);
  }
};


export const addComment = async (req, res, next) => {
  try {
    const newComment =  new commentsModel({ ...req.body, userId: req.user.id })
    const savedComment = await newComment.save();
    res.status(200).json(savedComment)
  } catch (error) {
    next(error)
  }
}