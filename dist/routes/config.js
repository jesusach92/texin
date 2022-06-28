"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _config = require("../controllers/config");

var routes = (0, _express.Router)();
// Metodos de Configuracion
//Metodo que devuelve los tipos de domicilio
routes.get("/AdresType", _config.listAType); //Metodo que devuelve los tipos de negocios

routes.get("/BusinessType", _config.listBusiness); // Metodo que devuelve las clasificaciones de un proveedor

routes.get("/SClasification", _config.listSClasificacion); //Metodo para que regresa los tipos de tecnolocia que existen

routes.get("/Tech", _config.listTech); //Agregar tipo de domicilio

routes.post("/AdresType", _config.addaType); //Metodo para agregar tipo de negocio

routes.post("/BusinessType", _config.addBusinessType); // Metodo para agregar clasificacion de proveedor

routes.post("/SClasification", _config.addsClasification); //Metodo para agregar Tecnologia del producto

routes.post("/Tech", _config.addTechnology); //Ruta para Actualizar Tipo de Domicilio

routes.put("/AdresType", _config.updateAddType); // Metodo de Actualizacion de Tipos de Negocio

routes.put("/BusinessType", _config.updateBusinessType); // Ruta para Actualizar Clasificacion de Proveedor

routes.put("/SClasification", _config.UpdatesClasification); // Ruta para Actualizar el tipo de Tenologia

routes.put("/Tech", _config.UpdateTechnology); //Ruta para borrar tipo de domicilio

routes["delete"]("/AdresType/:id", _config.deleteAddType); // Metodo para eliminar tipo de negocio

routes["delete"]("/BusinessType/:id", _config.deleteBusinessType); // Ruta para borrar clasificacion de proveedor

routes["delete"]("/SClasification/:id", _config.deleteSclasification); //Ruta para borrar tecnologia

/* Deleting the technology. */

routes["delete"]("/Tech/:id", _config.deleteTechnology);
var _default = routes;
exports["default"] = _default;