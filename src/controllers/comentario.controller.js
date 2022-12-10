import Comentario from "../models/comentario";


export const renderComentario = async(req,res)=>{
    const comentarios = await Comentario.find().lean();
    const perfil = req.user.perfil;
    const correo = req.user.email;
    res.render("comentario",{correo, perfil, comentarios:comentarios});
};

export const renderComentarioE = async(req,res)=>{
    const comentarios = await Comentario.find().lean();
    res.render("editComen",{comentarios:comentarios});
};

export const createComentario =async(req,res)=>{
    try {
        const correo = req.user.email;
        const {descripcion} = req.body;
        const comentarioSaved = new Comentario({
            correo,
            descripcion
        })
        await comentarioSaved.save();
        console.log(comentarioSaved);
        res.redirect('/comentario');
    } catch (error) {
        console.log(error);
    }
}

export const renderComentarioEdit = async(req,res)=>{
    const correo = req.user.email;
    const comentario = await Comentario.findById(req.params.id).lean()
    res.render("editComentario",{correo, comentario});
}

export const editComentario = async(req,res)=>{
    const{id } = req.params
    await Comentario.findByIdAndUpdate(id, req.body)
    res.redirect('/editComen');
}

export const deleteComentario = async(req,res)=>{
    const { id } = req.params;
    await Comentario.findByIdAndDelete(id)
    res.redirect('/editComen');
}

export const doneComentario =async(req,res)=>{
    const{id } = req.params;
    const comentario = await Comentario.findById(id)
    comentario.done = !comentario.done;
    await comentario.save();
    res.redirect("/comentario");

}