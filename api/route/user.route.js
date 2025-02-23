import express from "express";
import { deleteUser, test, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../../utils/verifyUser.js";


const router = express.Router();

router.get("/test", test);
router.put('/update/:userId', verifyToken, updateUser);    //put and post to update but put is better practice
router.delete('/delete/:userId',verifyToken, deleteUser);
export default router;