"use strict";

var _express = require("express");

var _supplies = require("../controllers/supplies");

var router = (0, _express.Router)(); // Lista a todos los proveedores con tipo de negocio y clasificacion

router.get("/", _supplies.supplielist); //obtiene los datos del proveedor que corresponde al ID

router.get("/:id", _supplies.supplieById); // Agrega Proveedor devuelve el ID del proveedor nuevo

router.post("/", _supplies.addSupplie); // Actualiza los datos del proveedor y Fecha de Modificacion

router.put("/", _supplies.EditSupplie); // Borrar Proveedor

router["delete"]("/:id", _supplies.deleteSupplie);
module.exports = router;