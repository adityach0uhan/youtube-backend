import express from 'express'
import { tokenVerification } from "../tokenVerification.js";
import {
  getVideo,
  addVideo,
  updateVideo,
  deleteVideo,
  getTreadingVideos,
  getRandomVideos,
  increaseViews,
} from "../controllers/video.controller.js";
const router = express.Router();
router.get("/", getVideo);
router.post("/:id", tokenVerification, addVideo);
router.put("/:id", tokenVerification, updateVideo);
router.delete("/:id", tokenVerification, deleteVideo);
router.get("/trending", getTreadingVideos)
router.get("/random", getRandomVideos);
router.put("/views/:id", increaseViews)
router.get("/subscribed",tokenVerification,getSubscribedVideos)



export default router;
