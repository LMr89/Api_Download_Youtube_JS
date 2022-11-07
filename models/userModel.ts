import { Schema, Types, model, Model } from "mongoose";
import User from "../interfaces/response/user.interface";


const UserSchema = new Schema<User>(
    {
        phoneModel: {
            type:String,
            required:true
        },
        phoneId:{
            type:String,
            required:true
        },
        token:{
            type:String,
            required:true
        },
        times:{
            type:Number,
            required:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

const UserModel = model('userCollection',UserSchema);
export default UserModel;