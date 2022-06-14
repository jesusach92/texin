import { Router } from "express";
import { addAdress, deleteAdress, EditAdress, supplieFullAdress } from "../controllers/adress";
const router = Router();


//Obtiene todos los domicilios del proveedor
router.get("/:id", supplieFullAdress);

//Agrega domicilio a Proveedore devuelve el ID del nuevo domicilio
router.post("/", addAdress);

//Actualiza el Domicilio y la fecha de Actualizacion del proveedor
router.put("/", EditAdress);

// Borrar Domicilios
router.delete("/", deleteAdress);

export  {router}