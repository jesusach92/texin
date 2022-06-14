"use strict";

var _express = require("express");

var _products = require("../controllers/products");

var router = (0, _express.Router)();
// Metodos de Productos
// Listar productos con Nombre del producto, tecnologia, descripcion
router.get("/", _products.productlist); // Mostrar datos de producto por Id

router.get("/:id", _products.productId); //Agregar producto sin relacion

router.post("/", _products.addProduct); // Actualizar campos del producto

router.put("/", _products.editProduct); // Borrar producto y su relacion con los proveedores

router["delete"]("/:id", _products.deleteProduct);
module.exports = router;