"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _products = require("../controllers/products");

var productsRouter = (0, _express.Router)();
// Metodos de Productos
// Listar productos con Nombre del producto, tecnologia, descripcion
productsRouter.get("/", _products.productlist); // Mostrar datos de producto por Id

productsRouter.get("/:id", _products.productId); //Agregar producto sin relacion

productsRouter.post("/", _products.addProduct); // Actualizar campos del producto

productsRouter.put("/", _products.editProduct); // Borrar producto y su relacion con los proveedores

productsRouter["delete"]("/:id", _products.deleteProduct);
var _default = productsRouter;
exports["default"] = _default;