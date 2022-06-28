"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _products = require("../controllers/products");

var routes = (0, _express.Router)();
// Metodos de Productos
// Listar productos con Nombre del producto, tecnologia, descripcion
routes.get("/", _products.productlist); // Mostrar datos de producto por Id

routes.get("/:id", _products.productId); //Agregar producto sin relacion

routes.post("/", _products.addProduct); // Actualizar campos del producto

routes.put("/", _products.editProduct); // Borrar producto y su relacion con los proveedores

routes["delete"]("/:id", _products.deleteProduct);
var _default = routes;
exports["default"] = _default;