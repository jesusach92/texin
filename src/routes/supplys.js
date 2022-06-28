import { Router } from "express";
import {AsingProductSupplie, deleteSupply, EditSupply, GetSupply, productSupplies, supplieProducts} from "../controllers/supplys"
const routes = Router();


//Devuelve todos los provedores del producto
routes.get("/:id", productSupplies);

//Obtiene la relacion entre proveedor y producto
routes.get("/supply/:id", GetSupply);

// Obtiene todos los productos del Proveedor
routes.get("/supplie/:id", supplieProducts);

//Asigna un producto que ya existe a un proveedor
routes.post("/", AsingProductSupplie);

// Actualiza la relacion entre proveedor y Producto
routes.put("/", EditSupply);

// Borrar Relacion Proveedor-Producto
routes.delete("/:id", deleteSupply);


export default routes
