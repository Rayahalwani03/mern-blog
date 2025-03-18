import express from "express";
import { verifyToken } from "../../utils/verifyUser.js";
import { createComment, getPostComments } from "../controllers/comment.controller.js";

const router = express.Router();

router.post('/create',verifyToken, createComment); //post req in insomnia 
router.get('/getPostComments/:postId', getPostComments); //post req in insomnia 

export default router;
