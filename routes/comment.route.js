import express from "express";
import {
  getComment,
  addComment,
  deleteComment,
} from "../controllers/comment.controller.js";
import { tokenVerification } from "../tokenVerification.js";
const router = express.Router();

router.get("/", getComment);
router.post("/:id", tokenVerification, addComment);
router.delete("/:videoId", tokenVerification, deleteComment);

export default router;
