import { Schema,model } from "mongoose";

const snackSchema = new Schema({
    snack:{
        type:String,
        require:true,
        unique: true,
        trim: true
    } ,
    descripcion:{
        type: String,
        require: true
    } ,
    precio:{
        type: Number,
        require: true
    } ,
},{
    timestamps:true,
    versionKey: false
});


export default model("Snack", snackSchema);