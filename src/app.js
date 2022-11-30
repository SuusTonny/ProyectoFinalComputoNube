import express from "express";
import exphbs from "express-handlebars";
import indexRoutes from './routes/index';
import './passport/passport'
import path from "path";
import { create } from 'express-handlebars';
import morgan from "morgan";
import passport from 'passport'
import session from 'express-session'
import flash from 'connect-flash'

const app = express();

app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir:path.join(app.get("views"), "partials"),
    defaulLayout: "main",
    extname: ".hbs",
  }).engine
);
app.set("view engine", ".hbs");

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(session({
  secret: 'miclave',
  resave: false,
  saveUninitialized:false
  
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use(indexRoutes);


//variables globales
app.use((req, res, next)=>{
  app.locals.error = req.flash('error');
  app.locals.user = req.user || null;
  //console.log(app.locals);
  next();
});


//estatic files

app.use(express.static(path.join(__dirname, "public")));
export default app;