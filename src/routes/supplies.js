import { Router } from "express";
import {addSupplie, deleteSupplie, EditSupplie, supplieById, supplielist} from "../controllers/supplies"
const suppliesRouter = Router();

// Lista a todos los proveedores con tipo de negocio y clasificacion
suppliesRouter.get("/", supplielist);

//obtiene los datos del proveedor que corresponde al ID
suppliesRouter.get("/:id", supplieById);

// Agrega Proveedor devuelve el ID del proveedor nuevo
suppliesRouter.post("/", addSupplie);

// Actualiza los datos del proveedor y Fecha de Modificacion

suppliesRouter.put("/", EditSupplie);

// Borrar Proveedor
suppliesRouter.delete("/:id", deleteSupplie);


export default suppliesRouter