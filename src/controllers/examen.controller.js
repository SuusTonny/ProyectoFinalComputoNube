import Examen from "../models/examen";

export const renderExamen = async(req,res)=>{
    const examenes = await Examen.find().lean();
    res.render("examen",{examenes:examenes});
}

export const createExamen =async(req,res)=>{
    try {
        const examen =Examen(req.body)
        const examenSaved = await examen.save();
        console.log(examenSaved);
        res.redirect('/examen');
    } catch (error) {
        console.log(error);
    }
}

export const renderExamenEdit = async(req,res)=>{
    const examen = await Examen.findById(req.params.id).lean()
    res.render("editExamen",{examen});
}

export const editExamen = async(req,res)=>{
    const{id } = req.params
    await Examen.findByIdAndUpdate(id, req.body)
    res.redirect('/examen');
}

export const delteexamen = async(req,res)=>{
    const { id } = req.params;
    await Examen.findByIdAndDelete(id)
    res.redirect('/examen');
}

export const doneExamen =async(req,res)=>{
    const{id } = req.params;
    const examen = await Examen.findById(id)
    examen.done = !examen.done;
    await examen.save();
    res.redirect("/examen");

}