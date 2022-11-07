
import {  Response } from "express";

const errorHandler = (res:Response, error:string) => {
    res.sendStatus(500);
    res.send({error})
}

export {errorHandler}