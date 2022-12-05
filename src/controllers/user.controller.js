import User from "../models/User";
import passport from 'passport';

export const Inicio = (req, res) => {
    res.render('Index');
};


export const renderSignUpForm = (req, res) =>{
    res.render('users/signup');
};

export const signup = async (req, res) => {
    console.log(req.body);
    const errors = [];
    const {name, email, password, confirm_password, phone, perfil} = req.body;
    if (password != confirm_password) {
        errors.push({text: 'Contraseñas no coinciden'});
    }
    if (password.length < 4 ){
        errors.push({text: 'La contraseña debe ser mayor a 4 caracteres'});
    }
    if (errors.length > 0) {
        res.render('users/signup', {
            errors,
            name,
            email,
            phone,
            perfil
        }) 
    } else {
        const emailUser = await User.findOne({email: email});
        if (emailUser) { 
            errors.push({text: 'El correo ya se esta usando'});
            res.render('users/signup'), {
                    errors,
                    name,
                    email,
                    phone,
                    perfil
                }
        } 
        
        else{
            const newUser = new User({name, email, password, phone, perfil});
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            res.redirect('/tarea')
        }
        
        
    }

};

export const renderSigninForm = (req, res) => {
    res.render('users/signin');
};

export const signin = passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect: '/users/signin',
    failureFlash: true
});


export const logout = (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/users/signin');
      });
};

