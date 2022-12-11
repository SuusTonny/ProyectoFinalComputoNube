import Info from "../models/info";

export const createInfo =async(req,res)=>{
    try {
        const info =Info(req.body)
        const infoSaved = await info.save();
        console.log(infoSaved);
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}

export const renderInfo = async(req,res)=>{
    const infos = await Info.find().lean();
    res.render("info",{infos:infos});
};

export const renderInfoEdit = async(req,res)=>{
    const info = await Info.findById(req.params.id).lean()
    res.render("editInfo",{info});
}

export const editInfo = async(req,res)=>{
    const{id } = req.params
    await Info.findByIdAndUpdate(id, req.body)
    res.redirect('/');
}

export const deleteInfo = async(req,res)=>{
    const { id } = req.params;
    await Info.findByIdAndDelete(id)
    res.redirect('/');
}