import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck } from "../middleware/auth";

const router = express.Router();

// /api/my/user --> passes the request based on it's type (eg: get,post) to the correct controller
router.post("/", jwtCheck, MyUserController.createCurrentUser);

export default router;
