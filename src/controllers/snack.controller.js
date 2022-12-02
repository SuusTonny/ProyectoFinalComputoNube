import Snack from "../models/snack";

export const renderSnack = async(req,res)=>{
    const snacks = await Snack.find().lean();
    res.render("snack",{snacks:snacks});
}

export const createSnack =async(req,res)=>{
    try {
        const snack =Snack(req.body)
        const snackSaved = await snack.save();
        console.log(snackSaved);
        res.redirect('/snack');
    } catch (error) {
        console.log(error);
    }
}

export const renderSnackEdit = async(req,res)=>{
    const snack = await Snack.findById(req.params.id).lean()
    res.render("editSnack",{snack});
}

export const editSnack = async(req,res)=>{
    const{id } = req.params
    await Snack.findByIdAndUpdate(id, req.body)
    res.redirect('/snack');
}

export const deletesnack = async(req,res)=>{
    const { id } = req.params;
    await Snack.findByIdAndDelete(id)
    res.redirect('/snack');
}

export const doneSnack =async(req,res)=>{
    const{id } = req.params;
    const snack = await Snack.findById(id)
    snack.done = !snack.done;
    await snack.save();
    res.redirect("/snack");

}