import Comentario from "../models/comentario";


export const renderComentario = async(req,res)=>{
    const comentarios = await Comentario.find().lean();
    //console.log(req.user);
    res.render("comentario",{comentarios:comentarios});
}

export const renderComentarioE = async(req,res)=>{
    const comentarios = await Comentario.find().lean();
    //console.log();
    res.render("editComen",{comentarios:comentarios});
}

export const createComentario =async(req,res)=>{
    try {
        const comentario =Comentario(req.body)
        const comentarioSaved = await comentario.save();
        console.log(comentarioSaved);
        //console.log(req.body);
        //res.send("Guardar");
        res.redirect('/comentario');
    } catch (error) {
        console.log(error);
    }
}

export const aboutComentario = (req,res)=>{
    res.render("about");
}

export const renderComentarioEdit = async(req,res)=>{
    //console.log(req.params.id)
  const comentario = await Comentario.findById(req.params.id).lean()

   // res.render("edit");
    res.render("editComentario",{comentario});
}

export const editComentario = async(req,res)=>{
    const{id } = req.params

    await Comentario.findByIdAndUpdate(id, req.body)

    //console.log(req.body);
    //res.send('Cambio recibido');
    res.redirect('/comentario');
}

export const delteComentario = async(req,res)=>{
    const { id } = req.params;
    await Comentario.findByIdAndDelete(id)
    //res.render("delete");
    res.redirect('/comentario');
}

export const doneComentario =async(req,res)=>{
    const{id } = req.params;
    const comentario = await Comentario.findById(id)
    comentario.done = !comentario.done;
    await comentario.save();
    res.redirect("/comentario");

}