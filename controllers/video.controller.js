import videoModel from "../models/Video.model.js";
import { createError } from "../errors.js";
export const getVideo = async (req, res, next) => {
  try {
    const video = await videoModel.findById(req.params.id);
    res.status(200).json(video);
  } catch (error) {
    next(error);
  }
};

export const getTrendingVideo = async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const getRandomVideo = async (req, res, next) => {
  try {
    const randomvideo = await videoModel.find({});
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
    const video = await videoModel.findById(req.params.id);
    if (!video) {
      return next(createError("Video", 404, "Video Not Found"));
    }
    if (video.userId === req.user.id) {
      await videoModel.findByIdAndDelete(req.params.id);
      res.status(200).send("Video Deleted Successfully");
    } else {
      return next(createError("Video", 404, "You Can delete Only Your video"));
    }
  } catch (error) {
    next(error);
  }
};

export const updateVideo = async (req, res, next) => {
  try {
    const video = await videoModel.findById(req.params.id);
    if (!video) {
      return next(createError("Video", 404, "Video Not Found"));
    }
    if (video.userId === req.user.id) {
      const updatedVideo = await videoModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updatedVideo);
    } else {
      return next(createError("Video", 404, "You Can update Only Your video"));
    }
  } catch (error) {
    next(error);
  }
};

export const increaseViews = async (req, res, next) => {
  try {
    videoModel.findByIdAndUpdate(req.params.id, {
      $inc: { views: 1 },
    });
    res.status(200).send("Increased View")
  } catch (error) {
    next(error);
  }
};
