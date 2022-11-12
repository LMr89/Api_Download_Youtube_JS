import UserModel from "../models/userModel"
import UserRequest from "../interfaces/request/userRequest.interface";
import convertUserReqToUserModel from "../mapper/convertUser";

const registerUserService = async (user: UserRequest) => {

    const isUserAlreadyRegistered = await searchUser(user);
console.log(`Usuario ?  ${isUserAlreadyRegistered}`)
    if (isUserAlreadyRegistered !== null) {
        return null;
    }

    const registerUser = await UserModel.create(convertUserReqToUserModel(user));
    return registerUser;

}


const searchUser = async (user:UserRequest) => {
    const userFound = await UserModel.findOne({phoneId:user.phoneId});
    return userFound;
}


const getUserTokenByIdentifier = async (user: UserRequest) => {

    const userFounded = await searchUser(user);
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