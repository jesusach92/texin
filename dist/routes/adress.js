"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _adress = require("../controllers/adress");

var adressRouter = (0, _express.Router)(); //Obtiene todos los domicilios del proveedor

adressRouter.get("/:id", _adress.supplieFullAdress); //Agrega domicilio a Proveedore devuelve el ID del nuevo domicilio

adressRouter.post("/", _adress.addAdress); //Actualiza el Domicilio y la fecha de Actualizacion del proveedor

adressRouter.put("/", _adress.EditAdress); // Borrar Domicilios

adressRouter["delete"]("/", _adress.deleteAdress);
var _default = adressRouter;
exports["default"] = _default;