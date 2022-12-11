import { Router } from "express"
import Task from "../models/Task";
import { renderTasks, createTask,aboutTask, renderTaskEdit, editTask, delteTask, doneTask } from "../controllers/tasks.controller";
import { createExamen, renderExamen, editExamen, delteexamen, doneExamen, renderExamenEdit} from "../controllers//examen.controller";
import { renderSignUpForm, renderSigninForm, signup, signin, logout, Inicio } from "../controllers/user.controller";
import { renderSnack, renderSnackEd, createSnack, editSnack, deletesnack, doneSnack, renderSnackEdit } from "../controllers/snack.controller";
import {renderCartelera, renderCarteEdith, createCartelera, editCartelera, deletecartelera, doneCartelera, renderCarteleraEdit} from "../controllers/fotocartelera.controller";
import {renderComentario,renderComentarioE, createComentario, renderComentarioEdit, editComentario, deleteComentario, doneComentario} from "../controllers/comentario.controller"
import {renderPerfil, renderPerfilEdit, editPerfil} from "../controllers/perfil.controller";
import isAuthenticated from "../helpers/auth";
import { isAdmin } from "../helpers/auth";
import {createInfo, renderInfo, renderInfoEdit, editInfo, deleteInfo} from "../controllers/info.controller"

const router = Router();




router.get("/users/signup", renderSignUpForm);

router.post("/users/signup", signup);

router.get("/users/signin", renderSigninForm);

router.post("/users/signin", signin);

router.get("/users/logout", logout);


router.get("/", Inicio);

router.get("/info", isAuthenticated, isAdmin, renderInfo);

router.post("/info/add", isAuthenticated, isAdmin, createInfo);

router.get("/editInfo/:id", isAuthenticated, isAdmin, renderInfoEdit);

router.post("/editInfo/:id", isAuthenticated, isAdmin, editInfo);

router.get("/deleteInfo/:id", isAuthenticated, isAdmin, deleteInfo);



router.get("/miPerfil", isAuthenticated, renderPerfil)

router.get("/editPerfil", isAuthenticated, renderPerfilEdit);

router.post("/editPerfil", isAuthenticated, editPerfil);


router.get("/cartelera", isAuthenticated, renderCartelera);

router.get("/editCartelera", isAuthenticated, isAdmin,renderCarteEdith);

router.post("/editCartelera/add", isAuthenticated, isAdmin, createCartelera);

router.get("/editCartel/:id", isAuthenticated, isAdmin, renderCarteleraEdit);

router.post("/editCartel/:id", isAuthenticated, isAdmin, editCartelera);

router.get("/deleteCartelera/:id", isAuthenticated, isAdmin, deletecartelera);

router.get("/taggdone/:id", isAuthenticated, doneCartelera);




router.get("/snack", isAuthenticated, renderSnack);

router.get("/editSnack", isAuthenticated, isAdmin, renderSnackEd);

router.post("/editSnack/add", isAuthenticated, isAdmin, createSnack);

router.get("/editSnac/:id", isAuthenticated, isAdmin, renderSnackEdit);

router.post("/editSnac/:id", isAuthenticated, isAdmin, editSnack);

router.get("/deleteSnack/:id", isAuthenticated, isAdmin, deletesnack);

router.get("/taggdone/:id", isAuthenticated, doneSnack);


router.get("/comentario", isAuthenticated, renderComentario);

router.get("/editComen", isAuthenticated, isAdmin, renderComentarioE);

router.post("/comentarios/add", isAuthenticated, createComentario) ;

router.get("/editComentario/:id", isAuthenticated, isAdmin, renderComentarioEdit);

router.post("/editComentario/:id", isAuthenticated, isAdmin, editComentario);

router.get("/deleteComentario/:id", isAuthenticated, isAdmin, deleteComentario);


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