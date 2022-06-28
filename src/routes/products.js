import { Router } from "express";
const routes = Router();
import {addProduct, deleteProduct, editProduct, productId, productlist, productSupplies} from "../controllers/products"

// Metodos de Productos

// Listar productos con Nombre del producto, tecnologia, descripcion
routes.get("/", productlist);

// Mostrar datos de producto por Id
routes.get("/:id", productId);


//Agregar producto sin relacion
routes.post("/", addProduct);

// Actualizar campos del producto
routes.put("/", editProduct);

// Borrar producto y su relacion con los proveedores
routes.delete("/:id", deleteProduct);


export default routes