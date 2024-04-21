import express from "express";
const router = express.Router();
import loginController from '../controllers/login.controller.js'

router.post("/", loginController);

export default router;
