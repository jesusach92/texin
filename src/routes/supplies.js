import { Router } from "express";
import {addSupplie, deleteSupplie, EditSupplie, supplieById, supplielist} from "../controllers/supplies"
const router = Router();

// Lista a todos los proveedores con tipo de negocio y clasificacion
router.get("/", supplielist);

//obtiene los datos del proveedor que corresponde al ID
router.get("/:id", supplieById);

// Agrega Proveedor devuelve el ID del proveedor nuevo
router.post("/", addSupplie);

// Actualiza los datos del proveedor y Fecha de Modificacion

router.put("/", EditSupplie);

// Borrar Proveedor
router.delete("/:id", deleteSupplie);


export  {router}