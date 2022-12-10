import { Schema,model } from "mongoose";

const comentarioSchema = new Schema({
    nombre:{
        type:String,
        require:true,
        unique: true,
        trim: true
    } ,
    descripcion:{
        type: String,
        require: true
    } ,
},{
    timestamps:true,
    versionKey: false
});


export default model("Comentario", comentarioSchema);