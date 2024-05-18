
import { tokenVerification } from "../tokenVerification.js";
import {
  getVideo,
  addVideo,
  updateVideo,
  deleteVideo,
} from "../controllers/video.controller.js";

router.get("/", getVideo);
router.post("/", tokenVerification, addVideo);
router.put("/", tokenVerification, updateVideo);
router.delete("/", tokenVerification, deleteVideo);

export default router;
