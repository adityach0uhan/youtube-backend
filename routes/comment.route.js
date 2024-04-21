import express from "express";
import commentController from "../controllers/comment.controller.js";
const router = express.Router();

router.get("/", commentController);

export default router;
