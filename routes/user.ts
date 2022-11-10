import { Router } from "express";
import { getUserToken, registerUser, verifyUser } from "../controllers/userController";

const router = Router();

router.get("/", getUserToken);
router.post("/register",registerUser);
router.post("/login",verifyUser);
router.post("/getToken",getUserToken)
export {router}