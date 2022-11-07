import { Response, Request } from "express";
import { registerUserService } from "../service/userService";
import { errorHandler } from "../utils/errorHandler";

const registerUser = async ({body}: Request, res: Response) => {
    try {
        const newUser = await registerUserService(body);
        res.send({data:"Registrado con exito"})
        
    } catch (error) {
        errorHandler(res,"DATA_INVALID");
        
    }
}

const verifyUser = (req: Request, res: Response) => {
    res.send({ DATA: "verificando usuario" })
}

const getUserToken = (req: Request, res: Response) => {
    res.send({ DATA: "traer token" })
}

export {
    registerUser,
    verifyUser,
    getUserToken
}