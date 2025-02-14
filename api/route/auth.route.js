import express from "express";
import { facebook, signup } from "../controllers/auth.crontroller.js";
import { signin } from "../controllers/auth.crontroller.js";
import { google } from "../controllers/auth.crontroller.js";

const router = express.Router();

router.post('/signup', signup); //create 
router.post('/signin', signin); //create 
router.post('/google', google);
router.post('/facebook',facebook);


export default router;