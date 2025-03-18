import express from "express";
import { verifyToken } from "../../utils/verifyUser.js";
import { createComment, getPostComments } from "../controllers/comment.controller.js";

const router = express.Router();

router.post('/create',verifyToken, createComment); //post req in insomnia 
router.get('/getPostComments/:postId', getPostComments); //all the comments for the post 

export default router;
