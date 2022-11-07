import { Router, Response, Request } from "express";
import { getVideoDetails } from "../controllers/mainController";

const router = Router();

router.
    get("/", getVideoDetails)

export {router}