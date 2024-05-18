
import { tokenVerification } from "../tokenVerification.js";
import {
  getVideo,
  addVideo,
  updateVideo,
  deleteVideo,
} from "../controllers/video.controller.js";

router.get("/", getVideo);
router.post("/:id", tokenVerification, addVideo);
router.put("/:id", tokenVerification, updateVideo);
router.delete("/:id", tokenVerification, deleteVideo);

export default router;
