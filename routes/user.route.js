import express from "express";
import {userInfo,updateUser,getUser,deleteUser,subscribe,unsubscribe,liked,disliked} from '../controllers/user.controller.js'
const router = express.Router()

router.get('/', userInfo)

// update 
router.put('/:id', updateUser);

//get a user
router.get('/find/:id',getUser)
    
// delete 
router.delete("/:id", deleteUser);

//subscribe
router.put('/subscribe/:id', subscribe)

//unsubscribe
router.put('/unsubscribe/:id', unsubscribe)

//like
router.put("/like/:VideoId", liked);

//dislike
router.put("/dislike/:VideoId", disliked);






export default router