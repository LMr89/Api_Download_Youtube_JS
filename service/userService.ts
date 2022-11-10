import UserModel from "../models/userModel"
import UserRequest from "../interfaces/request/userRequest.interface";
import convertUserReqToUserModel from "../mapper/convertUser";

const registerUserService = async (user: UserRequest) => {

    const registerUser = await UserModel.create(convertUserReqToUserModel(user));
    return registerUser;

}


const getUserTokenByIdentifier = async (user: UserRequest) => {

    const userFounded = await UserModel.findOne({ phoneId: user.phoneId });
    return userFounded?.token;

}

const verifyUserToken = (token: string): any => {
    const isAllOk = verifyUserToken(token);
    return isAllOk;
}


export {
    registerUserService,
    getUserTokenByIdentifier,
    verifyUserToken
}