import { Router } from "express";
import {AsingProductSupplie, deleteSupply, EditSupply, GetSupply, supplieProducts} from "../controllers/supplys"
const router = Router();

//Obtiene la relacion entre proveedor y producto
router.get("/:id", GetSupply);

// Obtiene todos los productos del Proveedor
router.get("/supplie/:id", supplieProducts);

//Asigna un producto que ya existe a un proveedor
router.post("/", AsingProductSupplie);

// Actualiza la relacion entre proveedor y Producto
router.put("/", EditSupply);

// Borrar Relacion Proveedor-Producto
router.delete("/:id", deleteSupply);

module.exports = router;
