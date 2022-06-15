import { Router } from "express";
const productsRouter = Router();
import {addProduct, deleteProduct, editProduct, productId, productlist, productSupplies} from "../controllers/products"

// Metodos de Productos

// Listar productos con Nombre del producto, tecnologia, descripcion
productsRouter.get("/", productlist);

// Mostrar datos de producto por Id
productsRouter.get("/:id", productId);


//Agregar producto sin relacion
productsRouter.post("/", addProduct);

// Actualizar campos del producto
productsRouter.put("/", editProduct);

// Borrar producto y su relacion con los proveedores
productsRouter.delete("/:id", deleteProduct);


export default productsRouter