const helpers = {};
import User from "../models/User";

helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect('/users/signin')
}

//admin
export const isAdmin = (req, res, next) =>{
    if(req.user.perfil === false){
        res.redirect("/");
    }
    next();
}

export default helpers.isAuthenticated;
