import express from "express";
import { verifyToken } from "../../utils/verifyUser.js";
import { create } from "../controllers/post.controller.js";

const router = express.Router();


router.post('/create',verifyToken, create); //post req in insomnia 

//api/post/create

export default router; // export it to index.js