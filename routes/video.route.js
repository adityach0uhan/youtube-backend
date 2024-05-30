import express from "express";
import { tokenVerification } from "../tokenVerification.js";
import {
  getVideo,
  addVideo,
  updateVideo,
  deleteVideo,
  getTreadingVideos,
  getRandomVideos,
  increaseViews,
  getSubscribedVideos,
  getVideosByTag,
  getVideosBySearch,
  likeVideo,
  dislikeVideo,
} from "../controllers/video.controller.js";
const router = express.Router();

router.get("/find/:id", getVideo);
router.post("/:id", tokenVerification, addVideo);
router.put("/:id", tokenVerification, updateVideo);
router.delete("/:id", tokenVerification, deleteVideo);
router.get("/trending", getTreadingVideos);
router.get("/random", getRandomVideos);
router.put("/views/:id", increaseViews);
router.get("/subscribed", tokenVerification, getSubscribedVideos);
router.get("/tags", getVideosByTag);
router.get("/search", getVideosBySearch);
router.get("/like/:videoId", tokenVerification, likeVideo);
router.get("/dislike/:videoId", tokenVerification, dislikeVideo);


export default router;
