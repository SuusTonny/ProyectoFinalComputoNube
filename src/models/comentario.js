import { Schema,model } from "mongoose";

const comentarioSchema = new Schema({
    correo:{
        type:String,
        require:true
    } ,
    descripcion:{
        type: String,
        require: true
    } ,
});


export default model("Comentario", comentarioSchema);