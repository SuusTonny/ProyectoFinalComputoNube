import { Schema,model } from "mongoose";

const examenSchema = new Schema({
    examen:{
        type:String,
        require:true,
        unique: true,
        trim: true
    } ,
    materia:{
        type: String,
        require: true
    } ,
    calificacion:{
        type: Number,
        require: true
    } ,
    done:{
        type: Boolean,
        default: false
    } ,
},{
    timestamps:true,
    versionKey: false
});


export default model("Examen", examenSchema);