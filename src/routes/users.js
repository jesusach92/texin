import { Router } from "express";
import {addUser, deleteUSer, getListUsers, getRoleUser, serchUser, updateUser, userRegister} from "../controllers/users"
import {getDataAdmin} from "../controllers/config"
const router = Router();


//Obtener Data para el Usuario
router.get("/DataAdmin", getDataAdmin);

//Obtener Lista de Usuarios para Admin
router.get("/UsersAdmin", getListUsers);
// Registrar Usuario

// Obtener los Roles a Asignar
router.get("/Roles",getRoleUser)

//Registrar Usuario
router.post("/", addUser)

//Borrar Usuario
router.delete("/:id", deleteUSer);

//Actualizar Usuario
router.put("/",updateUser)

module.exports = router