import { Router } from "express"
import Task from "../models/Task";
import { renderTasks, createTask,aboutTask, renderTaskEdit, editTask, delteTask, doneTask } from "../controllers/tasks.controller";
import { createExamen, renderExamen, editExamen, delteexamen, doneExamen, renderExamenEdit} from "../controllers//examen.controller";
import { renderSignUpForm, renderSigninForm, signup, signin, logout, Inicio } from "../controllers/user.controller";
import { renderSnack, createSnack, editSnack, deletesnack, doneSnack, renderSnackEdit } from "../controllers/snack.controller";
import {renderCartelera, renderCarteEdith, createCartelera, editCartelera, deletecartelera, doneCartelera, renderCarteleraEdit} from "../controllers/fotocartelera.controller";

import isAuthenticated from "../helpers/auth"

const router = Router();


router.get("/users/signup", renderSignUpForm);

router.post("/users/signup", signup);

router.get("/users/signin", renderSigninForm);

router.post("/users/signin", signin);

router.get("/users/logout", logout);

router.get("/", Inicio);


router.get("/cartelera", isAuthenticated, renderCartelera);

router.get("/editCartelera", isAuthenticated, renderCarteEdith);

router.post("/editCartelera/add", isAuthenticated, createCartelera);

router.get("/editCartelera/:id", isAuthenticated, renderCarteleraEdit);

router.post("/editCartelera/:id", isAuthenticated, editCartelera);

router.get("/deleteCartelera/:id", isAuthenticated, deletecartelera);

router.get("/taggdone/:id", isAuthenticated, doneCartelera);




router.get("/snack", isAuthenticated, renderSnack);

router.post("/snack/add", isAuthenticated, createSnack) ;

router.get("/editSnack/:id", isAuthenticated, renderSnackEdit);

router.post("/editSnack/:id", isAuthenticated, editSnack);

router.get("/deleteSnack/:id", isAuthenticated, deletesnack);

router.get("/taggdone/:id", isAuthenticated, doneSnack);


router.get("/tarea", isAuthenticated, renderTasks);

router.post("/tasks/add", isAuthenticated, createTask) ;

router.get("/about", isAuthenticated, aboutTask);

router.get("/edit/:id", isAuthenticated, renderTaskEdit);

router.post("/edit/:id", isAuthenticated, editTask);

router.get("/delete/:id", isAuthenticated, delteTask);

router.get("/taggdone/:id", isAuthenticated, doneTask);


router.get("/examen", isAuthenticated, renderExamen);

router.post("/examenes/add", isAuthenticated, createExamen) ;

router.get("/editExamen/:id", isAuthenticated, renderExamenEdit);

router.post("/editExamen/:id", isAuthenticated, editExamen);

router.get("/deleteExamen/:id", isAuthenticated, delteexamen);

router.get("/taggdoneExamen/:id", isAuthenticated, doneExamen);


export default router;