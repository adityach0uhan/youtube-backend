import videoModel from "../models/Video.model.js";
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
    res.status(200).json(saveVideo)
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
  } catch (error) {
    console.log(error);
  }
};
