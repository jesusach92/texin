"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = require("express");

var _adress = require("../controllers/adress");

var router = (0, _express.Router)(); //Obtiene todos los domicilios del proveedor

exports.router = router;
router.get("/:id", _adress.supplieFullAdress); //Agrega domicilio a Proveedore devuelve el ID del nuevo domicilio

router.post("/", _adress.addAdress); //Actualiza el Domicilio y la fecha de Actualizacion del proveedor

router.put("/", _adress.EditAdress); // Borrar Domicilios

router["delete"]("/", _adress.deleteAdress);