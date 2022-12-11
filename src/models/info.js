import { Schema,model } from "mongoose";

const infoSchema = new Schema({
    titulo:{
        type:String,
        require:true
    } ,
    informacion:{
        type: String,
        require: true
    } ,
});


export default model("Info", infoSchema);