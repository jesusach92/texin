"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _config = require("../controllers/config");

var configRouter = (0, _express.Router)();
// Metodos de Configuracion
//Metodo que devuelve los tipos de domicilio
configRouter.get("/AdresType", _config.listAType); //Metodo que devuelve los tipos de negocios

configRouter.get("/BusinessType", _config.listBusiness); // Metodo que devuelve las clasificaciones de un proveedor

configRouter.get("/SClasification", _config.listSClasificacion); //Metodo para que regresa los tipos de tecnolocia que existen

configRouter.get("/Tech", _config.listTech); //Agregar tipo de domicilio

configRouter.post("/AdresType", _config.addaType); //Metodo para agregar tipo de negocio

configRouter.post("/BusinessType", _config.addBusinessType); // Metodo para agregar clasificacion de proveedor

configRouter.post("/SClasification", _config.addsClasification); //Metodo para agregar Tecnologia del producto

configRouter.post("/Tech", _config.addTechnology); //Ruta para Actualizar Tipo de Domicilio

configRouter.put("/AdresType", _config.updateAddType); // Metodo de Actualizacion de Tipos de Negocio

configRouter.put("/BusinessType", _config.updateBusinessType); // Ruta para Actualizar Clasificacion de Proveedor

configRouter.put("/SClasification", _config.UpdatesClasification); // Ruta para Actualizar el tipo de Tenologia

configRouter.put("/Tech", _config.UpdateTechnology); //Ruta para borrar tipo de domicilio

configRouter["delete"]("/AdresType/:id", _config.deleteAddType); // Metodo para eliminar tipo de negocio

configRouter["delete"]("/BusinessType/:id", _config.deleteBusinessType); // Ruta para borrar clasificacion de proveedor

configRouter["delete"]("/SClasification/:id", _config.deleteSclasification); //Ruta para borrar tecnologia

/* Deleting the technology. */

configRouter["delete"]("/Tech/:id", _config.deleteTechnology);
var _default = configRouter;
exports["default"] = _default;