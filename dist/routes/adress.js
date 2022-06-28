"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _adress = require("../controllers/adress");

var routes = (0, _express.Router)(); //Obtiene todos los domicilios del proveedor

routes.get("/:id", _adress.supplieFullAdress); //Agrega domicilio a Proveedore devuelve el ID del nuevo domicilio

routes.post("/", _adress.addAdress); //Actualiza el Domicilio y la fecha de Actualizacion del proveedor

routes.put("/", _adress.EditAdress); // Borrar Domicilios

routes["delete"]("/", _adress.deleteAdress);
var _default = routes;
exports["default"] = _default;