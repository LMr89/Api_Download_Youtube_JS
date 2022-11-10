import e from "cors";
import { Response, Request } from "express";
import { getUserTokenByIdentifier, registerUserService, verifyUserToken } from "../service/userService";
import { errorHandler } from "../utils/errorHandler";


const registerUser = async ({body}: Request, res: Response) => {
    try {
        console.log(body)
        const newUser = await registerUserService(body);
        res.send({data:"Registrado con exito"})
        
    } catch (error) {
        errorHandler(res,"DATA_INVALID", error);
        
    }
}

const verifyUser = async ({body}:  Request, res: Response) => {
    try {
        console.log(body)
        //Validar el jwt
        const verifiedUser = await verifyUserToken(body);

        if (verifiedUser !== true) {
            res.status(404)
            res.send({resultado:"Usuario invalido"})
            return;
        }

        res.status(200)
        res.send({resultado:"Usuario Valido"})
        
        
    } catch (error) {
        errorHandler(res,"DATA_INVALID", error);
        
    }
}

const getUserToken =  async  ({body}:  Request, res: Response) => {
    try {
        console.log(body)
        const getUserToken = await getUserTokenByIdentifier(body);
        res.send({usuario:body.phoneId ,token:getUserToken})
        
    } catch (error) {
        errorHandler(res,"DATA_INVALID", error);
        
    }
}

export {
    registerUser,
    verifyUser,
    getUserToken
}