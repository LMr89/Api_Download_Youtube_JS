import { Response, Request } from "express";
import { proccessResponse, verifiyValidURL } from "../service/youtubeService";
import { errorHandler } from "../utils/errorHandler";

const getVideoDetails = async ({body}: Request, res: Response) => {
    try {
        const isAValidURL = verifiyValidURL(body.url)

        if (!isAValidURL) {
            res.status(403);
            res.send({data:"INVALID_URL"});
            return;
        }

        let response =  await proccessResponse(body.url);
        res.status(200);
        res.send({youtubeApiResponse:response});

    } catch (error) {
        errorHandler(res, "BAD_REQUEST",error);
    }
}

const postUrl = (req: Request, res: Response) => {
    res.send({ DATA: "Aun valido" })
}

export {
    getVideoDetails,
    postUrl
}