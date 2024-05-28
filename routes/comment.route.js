import express from "express";
import {
  getComment,
  addComment,
  deleteComment,
} from "../controllers/comment.controller.js";
import { tokenVerification } from "../tokenVerification.js";
const router = express.Router();

router.get("/", getComment);
router.post("/", tokenVerification, addComment);
router.delete("/", tokenVerification, deleteComment);

export default router;
