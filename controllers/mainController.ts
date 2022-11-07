import { Response, Request } from "express";

const getVideoDetails = (req: Request, res: Response) => {
    res.send({ DATA: "Aun valido" })
}

const postUrl = (req: Request, res: Response) => {
    res.send({ DATA: "Aun valido" })
}

export {
    getVideoDetails,
    postUrl
}