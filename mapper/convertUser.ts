import UserRequest from "../interfaces/request/userRequest.interface";
import User from "../interfaces/response/user.interface";

const convertUserReqToUserModel = (userReq: UserRequest):User => {
    const userMapped:User = {
        phoneModel:userReq.phoneModel,
        phoneId:userReq.phoneId,
        token:"Pruebas",
        times:0
    };
    return userMapped;
}

export default  convertUserReqToUserModel;