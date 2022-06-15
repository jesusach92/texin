import { Router } from "express";
import {AsingProductSupplie, deleteSupply, EditSupply, GetSupply, productSupplies, supplieProducts} from "../controllers/supplys"
const supplysRouter = Router();


//Devuelve todos los provedores del producto
supplysRouter.get("/:id", productSupplies);

//Obtiene la relacion entre proveedor y producto
supplysRouter.get("/supply/:id", GetSupply);

// Obtiene todos los productos del Proveedor
supplysRouter.get("/supplie/:id", supplieProducts);

//Asigna un producto que ya existe a un proveedor
supplysRouter.post("/", AsingProductSupplie);

// Actualiza la relacion entre proveedor y Producto
supplysRouter.put("/", EditSupply);

// Borrar Relacion Proveedor-Producto
supplysRouter.delete("/:id", deleteSupply);


export default supplysRouter
