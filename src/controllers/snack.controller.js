import Snack from "../models/snack";
import User from "../models/User";

import cloudinary from "cloudinary";

cloudinary.config({
    cloud_name: 'dbt2x0mhm',
    api_key: '153614943568649',
    api_secret: 'x_AG48ojkAEs-T92I3oJEYKglqE'
});
import fs from "fs-extra";

export const renderSnack = async(req,res)=>{
    const snacks = await Snack.find().lean();
    const users = await User.find().lean();
    res.render("snack",{snacks:snacks, users:users});
};

export const renderSnackEd = async(req,res)=>{
    const snacks = await Snack.find().lean();
    res.render("editSnack",{snacks:snacks});
};

export const createSnack =async(req,res)=>{
    try {
        const {snack, descripcion, precio} = req.body;
        const result = await cloudinary.v2.uploader.upload(req.file.path);
        const snackSaved = new Snack({
            snack,
            descripcion,
            precio,
            imageURL: result.url,
            public_id:result.public_id
        })
        await snackSaved.save();
        await fs.unlink(req.file.path);
        console.log(snackSaved);
        res.redirect('/snack');
    } catch (error) {
        console.log(error);
    }
}

export const renderSnackEdit = async(req,res)=>{
    const snack = await Snack.findById(req.params.id).lean()
    res.render("editSnac",{snack});
}

export const editSnack = async(req,res)=>{
    const{id } = req.params
    await Snack.findByIdAndUpdate(id, req.body)
    res.redirect('/editSnack');
}

export const deletesnack = async(req,res)=>{
    const { id } = req.params;
    const photo = await Snack.findByIdAndDelete(id)
    await cloudinary.v2.uploader.destroy(photo.public_id)
    res.redirect('/snack');
}

export const doneSnack =async(req,res)=>{
    const{id } = req.params;
    const snack = await Snack.findById(id)
    snack.done = !snack.done;
    await snack.save();
    res.redirect("/snack");

}