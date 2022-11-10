import UserRequest from "../interfaces/request/userRequest.interface";
import User from "../interfaces/response/user.interface";
import { generateToken } from "../utils/jwt.handler";

const convertUserReqToUserModel = (userReq: UserRequest):User => {

    const jwtGenerated = generateToken(userReq.phoneId);
    const userMapped:User = {
        phoneModel:userReq.phoneModel,
        phoneId:userReq.phoneId,
        token: jwtGenerated,
        times:0
    };
    return userMapped;
}

export default  convertUserReqToUserModel;