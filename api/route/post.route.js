import express from "express";
import { verifyToken } from "../../utils/verifyUser.js";
import { create, deletepost, getposts } from "../controllers/post.controller.js";

const router = express.Router();


router.post('/create',verifyToken, create); //post req in insomnia 
router.get('/getposts', getposts);
router.delete('/deletepost/:postId/:userId',verifyToken, deletepost);
//api/post/create

export default router; // export it to index.js