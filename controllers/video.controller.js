import videoModel from "../models/Video.model.js";
import { createError } from "../errors.js";
import userModel from "../models/User.model.js";

export const getVideo = async (req, res, next) => {
  try {
    const video = await videoModel.findById(req.params.id);
    res.status(200).json(video);
  } catch (error) {
    next(error);
  }
};

export const getTreadingVideos = async (req, res, next) => {
  try {
    const trendingVideos = await videoModel.find().sort({ views: -1 });
    res.status(200).json(trendingVideos);
  } catch (error) {
    next(error);
  }
};

export const getRandomVideos = async (req, res, next) => {
  try {
    const randomvideo = await videoModel.aggregate([{ $sample: { size: 40 } }]);
    res.status(200).json(randomvideo);
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
    await videoModel.findByIdAndUpdate(req.params.id, {
      $inc: { views: 1 },
    });
    res.status(200).send("Increased View");
  } catch (error) {
    next(error);
  }
};

export const getSubscribedVideos = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const channellist = user.subscribedChannels;
    const videoPromises = channellist.map((channelId) =>
      videoModel.find({ userId: channelId }).exec()
    );
    const videos = await Promise.all(videoPromises);
    const flatList = videos.flat(); // Flatten the list of arrays

    res.json(flatList);
  } catch (error) {
    next(error);
  }
};

export const getVideosByTag = async (req, res, next) => {
  const tags = req.query.tags.split(",");
  try {
    const videos = await videoModel.find({ tags: { in: tags } }).limit(20);
    res.status(200).json(videos)
  } catch (error) {
    next(error)
  }
}

export const getVideosBySearch = async (req, res, next) => {
  const search = req.query.search;
  try {
    const videos = await videoModel
      .find({ title: { $regex: search, $options: "i" } })
      .limit(40);
    res.status(200).json(videos);
  } catch (error) {
    next(error);
  }
};


export const likeVideo = async (req, res, next) => {
  const userid=req.user.id
  try {
    const video = await videoModel.findByIdAndUpdate(
      req.params.videoId,
      {
        $addToSet: { likes: userid },
        $pull: { dislikes :userid},
      },
      {
        new: true,
      }
    );
    res.status(200).json("Liked video",video)
  } catch (error) {
    next(error)
  }
}

export const dislikeVideo = async (req, res, next) => {
  try {
  } catch (error) {}
};