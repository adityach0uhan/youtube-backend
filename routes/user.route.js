import express from "express";
import {
  userInfo,
  updateUser,
  getUser,
  deleteUser,
  subscribe,
  unsubscribe,
  liked,
  disliked,
  getComments,
} from "../controllers/user.controller.js";
import { tokenVerification } from "../tokenVerification.js";

const router = express.Router();

//get user info
router.get("/", userInfo);

// update
router.put("/:id", tokenVerification, updateUser);

//get a user
router.get("/find/:id", getUser);

// delete
router.delete("/:id", tokenVerification, deleteUser);

//subscribe
router.put("/subscribe/:id",tokenVerification, subscribe);

//unsubscribe
router.put("/unsubscribe/:id", unsubscribe);

//like
router.put("/like/:VideoId", liked);

//dislike
router.put("/dislike/:VideoId", disliked);

//comment
router.get("/comments/:VideoId", getComments);


export default router;
