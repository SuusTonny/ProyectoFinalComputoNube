import User from "../models/User";
import passport from 'passport';

export const renderPerfil = async(req,res)=>{
    const perfil = await req.user.perfil
    const nombre = await req.user.name;
    const correo = await req.user.email;
    const telefono = await req.user.phone;
    res.render("miPerfil",{nombre, correo, telefono, perfil});
}

export const renderPerfilEdit = async(req,res)=>{
    const nombre = await req.user.name;
    const correo = await req.user.email;
    const telefono = await req.user.phone;
    console.log(req.user.id)
    res.render("editPerfil",{correo, nombre, telefono});
}

export const editPerfil = async(req,res)=>{
    const id = req.user.id
    await User.findByIdAndUpdate(id, req.body)
    res.redirect('/miPerfil');
}

export const deletePerfil = async(req,res)=>{
    const { id } = req.params;
    await Comentario.findByIdAndDelete(id)
    res.redirect('/editComen');
}