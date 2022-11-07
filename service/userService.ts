import UserModel from "../models/userModel"
import UserRequest from "../interfaces/request/userRequest.interface";
import convertUserReqToUserModel from "../mapper/convertUser";

const registerUserService = async (user:UserRequest) => {
    
    const registerUser = await UserModel.create(convertUserReqToUserModel(user));
    return registerUser;

}
export {
    registerUserService
}