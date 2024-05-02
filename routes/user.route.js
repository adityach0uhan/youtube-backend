import express from "express";
import userController from '../controllers/user.controller.js'
const router = express.Router()

router.get('/', userInfo)

// update 
router.put('/:id',updateUser);
    
// delete 
router.put("/:id", updateUser);

//subscribe
router.put('/subscribe/:id', subscribe)

//unsubscribe
router.put('/unsubscribe/:id', unsubscribe)

//like
router.put("/like/:VideoId", liked);

//dislike
router.put("/dislike/:VideoId", disliked);






export default router