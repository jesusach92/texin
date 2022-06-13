import { Router } from "express";
const router = Router();
import {addProduct, deleteProduct, editProduct, productId, productlist, productSupplies} from "../controllers/products"

// Metodos de Productos

// Listar productos con Nombre del producto, tecnologia, descripcion
router.get("/", productlist);

// Mostrar datos de producto por Id
router.get("/:id", productId);


//Agregar producto sin relacion
router.post("/", addProduct);

// Actualizar campos del producto
router.put("/", editProduct);

// Borrar producto y su relacion con los proveedores
router.delete("/:id", deleteProduct);

module.exports = router