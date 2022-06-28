import { Router } from "express";
import {addSupplie, deleteSupplie, EditSupplie, supplieById, supplielist} from "../controllers/supplies"
const routes = Router();

// Lista a todos los proveedores con tipo de negocio y clasificacion
routes.get("/", supplielist);

//obtiene los datos del proveedor que corresponde al ID
routes.get("/:id", supplieById);

// Agrega Proveedor devuelve el ID del proveedor nuevo
routes.post("/", addSupplie);

// Actualiza los datos del proveedor y Fecha de Modificacion

routes.put("/", EditSupplie);

// Borrar Proveedor
routes.delete("/:id", deleteSupplie);


export default routes