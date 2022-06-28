"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _supplys = require("../controllers/supplys");

var routes = (0, _express.Router)(); //Devuelve todos los provedores del producto

routes.get("/:id", _supplys.productSupplies); //Obtiene la relacion entre proveedor y producto

routes.get("/supply/:id", _supplys.GetSupply); // Obtiene todos los productos del Proveedor

routes.get("/supplie/:id", _supplys.supplieProducts); //Asigna un producto que ya existe a un proveedor

routes.post("/", _supplys.AsingProductSupplie); // Actualiza la relacion entre proveedor y Producto

routes.put("/", _supplys.EditSupply); // Borrar Relacion Proveedor-Producto

routes["delete"]("/:id", _supplys.deleteSupply);
var _default = routes;
exports["default"] = _default;