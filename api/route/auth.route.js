import express from "express";
import { signup } from "../controllers/auth.crontroller.js";
import { signin } from "../controllers/auth.crontroller.js";

const router = express.Router();

router.post('/signup', signup); //create 
router.post('/signin', signin); //create 


export default router;