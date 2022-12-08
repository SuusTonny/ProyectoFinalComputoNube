import { Schema,model } from "mongoose";

const snackSchema = new Schema({
    snack:{
        type:String,
        require:true,
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
    imageURL: String,
    public_id: String,
});


export default model("Snack", snackSchema);