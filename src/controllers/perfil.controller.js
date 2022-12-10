import User from "../models/User";
import passport from 'passport';

export const renderPerfil = async(req,res)=>{
    console.log(req.user.name);
    const nombre = await req.user.name;
    const correo = await req.user.email;
    const telefono = await req.user.phone;
    res.render("miPerfil",{nombre, correo, telefono});
}
