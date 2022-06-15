import { Router } from "express";
import { addAdress, deleteAdress, EditAdress, supplieFullAdress } from "../controllers/adress";
const adressRouter = Router();


//Obtiene todos los domicilios del proveedor
adressRouter.get("/:id", supplieFullAdress);

//Agrega domicilio a Proveedore devuelve el ID del nuevo domicilio
adressRouter.post("/", addAdress);

//Actualiza el Domicilio y la fecha de Actualizacion del proveedor
adressRouter.put("/", EditAdress);

// Borrar Domicilios
adressRouter.delete("/", deleteAdress);

export default adressRouter