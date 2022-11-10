import { sign, verify } from "jsonwebtoken";
const JWT = process.env.JWT_SECRET || "token@.01010101@@";;


const generateToken = (phoneId:string) => {
    const jwt = sign({phoneId},JWT);
    return jwt;
}


const verifyToken = (token:string) => {
    const isAllOk = verify(token, JWT);
    return isAllOk;
  };
  
  export { generateToken, verifyToken };