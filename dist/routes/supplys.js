"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _supplys = require("../controllers/supplys");

var supplysRouter = (0, _express.Router)(); //Devuelve todos los provedores del producto

supplysRouter.get("/:id", _supplys.productSupplies); //Obtiene la relacion entre proveedor y producto

supplysRouter.get("/supply/:id", _supplys.GetSupply); // Obtiene todos los productos del Proveedor

supplysRouter.get("/supplie/:id", _supplys.supplieProducts); //Asigna un producto que ya existe a un proveedor

supplysRouter.post("/", _supplys.AsingProductSupplie); // Actualiza la relacion entre proveedor y Producto

supplysRouter.put("/", _supplys.EditSupply); // Borrar Relacion Proveedor-Producto

supplysRouter["delete"]("/:id", _supplys.deleteSupply);
var _default = supplysRouter;
exports["default"] = _default;