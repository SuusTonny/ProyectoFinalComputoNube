import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

import User from "../models/User.js";

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      // Match Email's User
      const user = await User.findOne({email});

      if (!user) {
        return done(null, false, { message: "Not User found." });
      }

      // Match Password's User
      const match = await user.comparePassword(password);
      if (match){
        return done(null, user);
      } else {
        return done(null, false, {message: 'Contraseña incorrecta'})
      }
      
    }
  )
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});