import Cartelera from "../models/fotocartelera";


import cloudinary from "cloudinary";

cloudinary.config({
    cloud_name: 'dbt2x0mhm',
    api_key: '153614943568649',
    api_secret: 'x_AG48ojkAEs-T92I3oJEYKglqE'
});
import fs from "fs-extra";

export const renderCartelera = async(req,res)=>{
    const carteleras = await Cartelera.find().lean();
    const perfil = req.user.perfil
    res.render("cartelera",{ perfil, carteleras:carteleras});
};

export const renderCarteEdith = async(req,res)=>{
    const carteleras = await Cartelera.find().lean();
    res.render("editCartelera",{carteleras:carteleras});
};

export const createCartelera =async(req,res)=>{
    try {
        const {pelicula, sinopsis, precio} = req.body;
        const result = await cloudinary.v2.uploader.upload(req.file.path);
        const carteleraSaved = new Cartelera({
            pelicula,
            sinopsis,
            precio,
            imageURL: result.url,
            public_id:result.public_id
        })
        await carteleraSaved.save();
        await fs.unlink(req.file.path);
        console.log(carteleraSaved);
        res.redirect('/cartelera');
    } catch (error) {
        console.log(error);
    }
}

export const renderCarteleraEdit = async(req,res)=>{
    const cartelera = await Cartelera.findById(req.params.id).lean()
    res.render("editCartel",{cartelera});
}

export const editCartelera = async(req,res)=>{
    const{id } = req.params
    await Cartelera.findByIdAndUpdate(id, req.body)
    res.redirect('/editCartelera');
}

export const deletecartelera = async(req,res)=>{
    const { id } = req.params;
    const photo = await Cartelera.findByIdAndDelete(id)
    await cloudinary.v2.uploader.destroy(photo.public_id)
    res.redirect('/cartelera');
}

export const doneCartelera =async(req,res)=>{
    const{id } = req.params;
    const cartelera = await Cartelera.findById(id)
    cartelera.done = !cartelera.done;
    await cartelera.save();
    res.redirect("/cartelera");

}