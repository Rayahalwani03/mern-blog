import express from "express";
import { verifyToken } from "../../utils/verifyUser.js";
import { createComment, getPostComments, likeComment } from "../controllers/comment.controller.js";

const router = express.Router();

router.post('/create',verifyToken, createComment); //post req in insomnia 
router.get('/getPostComments/:postId', getPostComments); //all the comments for the post 
router.put ('/likeComment/:commentId',verifyToken, likeComment); //sometimes we want to update

export default router;
