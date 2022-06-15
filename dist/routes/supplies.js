"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _supplies = require("../controllers/supplies");

var suppliesRouter = (0, _express.Router)(); // Lista a todos los proveedores con tipo de negocio y clasificacion

suppliesRouter.get("/", _supplies.supplielist); //obtiene los datos del proveedor que corresponde al ID

suppliesRouter.get("/:id", _supplies.supplieById); // Agrega Proveedor devuelve el ID del proveedor nuevo

suppliesRouter.post("/", _supplies.addSupplie); // Actualiza los datos del proveedor y Fecha de Modificacion

suppliesRouter.put("/", _supplies.EditSupplie); // Borrar Proveedor

suppliesRouter["delete"]("/:id", _supplies.deleteSupplie);
var _default = suppliesRouter;
exports["default"] = _default;