import express from "express";
import { signup } from "../controllers/auth.crontroller.js";

const router = express.Router();

router.post('/signup', signup); //create 

export default router;