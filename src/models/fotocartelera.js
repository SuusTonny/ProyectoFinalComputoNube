import { Schema,model } from "mongoose";

const carteleraSchema = new Schema({
    pelicula:{
        type:String,
        require:true,
        unique: true,
        trim: true
    } ,
    sinopsis:{
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


export default model("Cartelera", carteleraSchema);