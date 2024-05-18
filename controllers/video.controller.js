import videoModel from "../models/Video.model.js";
import { createError } from "../errors.js";
export const getVideo = async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const addVideo = async (req, res, next) => {
  try {
    const newVideo = new videoModel({ userId: req.user.id, ...req.body });
    const saveVideo = await newVideo.save();
    res.status(200).json(saveVideo);
  } catch (error) {
    console.log(error);
  }
};

export const deleteVideo = async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const updateVideo = async (req, res, next) => {
  try {
    const video = videoModel.findById(req.params.id);
    if (!video) {
      return next(createError("Video", 404, "Video Not Found"));
    }
    if (video.userId === req.user.id) {
      const updatedVideo = videoModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updatedVideo)
    }
  } catch (error) {
next(error)
  }
};
