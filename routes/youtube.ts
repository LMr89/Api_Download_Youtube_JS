import { Router, Response, Request } from "express";
import { getVideoDetails } from "../controllers/mainController";
import { checkingJWT } from "../middlewares/sessionJWT";

const router = Router();

router.
    post("/",  checkingJWT, getVideoDetails);

export {router}