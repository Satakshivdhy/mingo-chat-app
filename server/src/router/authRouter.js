import express from "express";
import { UserRegister, UserLogin } from "../controller/authController.js";

const router = express.Router();

router.post("/register", UserRegister);
router.post("/login", UserLogin);


export default router;