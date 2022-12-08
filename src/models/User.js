import { mongoose, model } from "mongoose";
import bcrypt from "bcrypt-nodejs";

const {Schema}= mongoose;

const userSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    perfil: {
        type: Number,
        default: 0
    }
}); 

userSchema.methods.encryptPassword=(password)=>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

export default model("users", userSchema);