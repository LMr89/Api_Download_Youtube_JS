import { NextFunction,Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handler";



const checkingJWT = (req:Request,  res:Response , next:NextFunction) => {
    try {
        const userJwt = req.headers.authorization || null;
        //console.log(`Token del usuario: ${userJwt}`);

        const jwt = userJwt?.split(" ").pop();

        const isUserWithJwt = verifyToken(<string> jwt);

        if (!isUserWithJwt) {
            res.status(400);
            res.send({data:"INVALID_SESSION"}); 
            return ;
        }

        next();

    } catch (error) {
        res.status(404);
        res.send({data:"INVALID_SESSION"}); 
        
    }

}

export {
    checkingJWT
}