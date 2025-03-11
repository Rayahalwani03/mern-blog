import express from "express";
import { deleteUser, signout, test, updateUser,getUsers } from "../controllers/user.controller.js";
import { verifyToken } from "../../utils/verifyUser.js";


const router = express.Router();

router.get("/test", test);
router.put('/update/:userId', verifyToken, updateUser);    //put and post to update but put is better practice
router.delete('/delete/:userId',verifyToken, deleteUser);
router.post('/signout', signout);
router.get('/getusers', verifyToken,getUsers) //prevent a random person from getting the information

export default router;