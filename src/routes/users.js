import { Router } from "express";
import {addUser, deleteUSer, getListUsers, getRoleUser, serchUser, updateUser, userRegister} from "../controllers/users"
import {getDataAdmin} from "../controllers/config"
const usersRouter = Router();


//Obtener Data para el Usuario
usersRouter.get("/DataAdmin", getDataAdmin);

//Obtener Lista de Usuarios para Admin
usersRouter.get("/UsersAdmin", getListUsers);
// Registrar Usuario

// Obtener los Roles a Asignar
usersRouter.get("/Roles",getRoleUser)

//Registrar Usuario
usersRouter.post("/", addUser)

//Borrar Usuario
usersRouter.delete("/:id", deleteUSer);

//Actualizar Usuario
usersRouter.put("/",updateUser)

export default usersRouter