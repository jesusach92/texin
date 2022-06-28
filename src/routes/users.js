import { Router } from "express";
import {addUser, deleteUSer, getListUsers, getRoleUser, serchUser, updateUser, userRegister} from "../controllers/users"
import {getDataAdmin} from "../controllers/config"
const routes = Router();


//Obtener Data para el Usuario
routes.get("/DataAdmin", getDataAdmin);

//Obtener Lista de Usuarios para Admin
routes.get("/UsersAdmin", getListUsers);
// Registrar Usuario

// Obtener los Roles a Asignar
routes.get("/Roles",getRoleUser)

//Registrar Usuario
routes.post("/", addUser)

//Borrar Usuario
routes.delete("/:id", deleteUSer);

//Actualizar Usuario
routes.put("/",updateUser)

export default routes