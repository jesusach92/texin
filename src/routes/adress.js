import { Router } from "express";
import { addAdress, deleteAdress, EditAdress, supplieFullAdress } from "../controllers/adress";
const routes = Router();


//Obtiene todos los domicilios del proveedor
routes.get("/:id", supplieFullAdress);

//Agrega domicilio a Proveedore devuelve el ID del nuevo domicilio
routes.post("/", addAdress);

//Actualiza el Domicilio y la fecha de Actualizacion del proveedor
routes.put("/", EditAdress);

// Borrar Domicilios
routes.delete("/", deleteAdress);

export default routes