import { Router, Response, Request } from "express";
import { getUserToken, registerUser } from "../controllers/userController";

const router = Router();

router.get("/", getUserToken);
router.post("/register",registerUser);
export {router}