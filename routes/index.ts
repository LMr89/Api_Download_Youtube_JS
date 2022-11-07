import { Router } from "express";
import {readdirSync} from "fs";


//Autocharge Routers from files in this directory
const PATH_ROUTER = `${__dirname}`
const router = Router();

/*
    This function drop an extension from
     a given file name

*/
const dropExtension = (fileName:string) => {
    const file = fileName.split(".").shift();
    return file;
}

/*
    This function charge automatically routes from filerouters
    using FS module and Dynamic Imports

*/
readdirSync(PATH_ROUTER).filter((fileRouter) => {
    const fileWithoutExtension = dropExtension(fileRouter);

    if (fileWithoutExtension !="index") {
        import ( `./${fileWithoutExtension}`).then((routerModule) => {
            router.use(`/${fileWithoutExtension}`,routerModule.router );
        }) 
    }
})

export {router};