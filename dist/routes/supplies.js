"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _supplies = require("../controllers/supplies");

var routes = (0, _express.Router)(); // Lista a todos los proveedores con tipo de negocio y clasificacion

routes.get("/", _supplies.supplielist); //obtiene los datos del proveedor que corresponde al ID

routes.get("/:id", _supplies.supplieById); // Agrega Proveedor devuelve el ID del proveedor nuevo

routes.post("/", _supplies.addSupplie); // Actualiza los datos del proveedor y Fecha de Modificacion

routes.put("/", _supplies.EditSupplie); // Borrar Proveedor

routes["delete"]("/:id", _supplies.deleteSupplie);
var _default = routes;
exports["default"] = _default;