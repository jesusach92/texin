"use strict";

var _express = require("express");

var _config = require("../controllers/config");

var router = (0, _express.Router)();
// Metodos de Configuracion
//Metodo que devuelve los tipos de domicilio
router.get("/AdresType", _config.listAType); //Metodo que devuelve los tipos de negocios

router.get("/BusinessType", _config.listBusiness); // Metodo que devuelve las clasificaciones de un proveedor

router.get("/SClasification", _config.listSClasificacion); //Metodo para que regresa los tipos de tecnolocia que existen

router.get("/Tech", _config.listTech); //Agregar tipo de domicilio

router.post("/AdresType", _config.addaType); //Metodo para agregar tipo de negocio

router.post("/BusinessType", _config.addBusinessType); // Metodo para agregar clasificacion de proveedor

router.post("/SClasification", _config.addsClasification); //Metodo para agregar Tecnologia del producto

router.post("/Tech", _config.addTechnology); //Ruta para Actualizar Tipo de Domicilio

router.put("/AdresType", _config.updateAddType); // Metodo de Actualizacion de Tipos de Negocio

router.put("/BusinessType", _config.updateBusinessType); // Ruta para Actualizar Clasificacion de Proveedor

router.put("/SClasification", _config.UpdatesClasification); // Ruta para Actualizar el tipo de Tenologia

router.put("/Tech", _config.UpdateTechnology); //Ruta para borrar tipo de domicilio

router["delete"]("/AdresType/:id", _config.deleteAddType); // Metodo para eliminar tipo de negocio

router["delete"]("/BusinessType/:id", _config.deleteBusinessType); // Ruta para borrar clasificacion de proveedor

router["delete"]("/SClasification/:id", _config.deleteSclasification); //Ruta para borrar tecnologia

/* Deleting the technology. */

router["delete"]("/Tech/:id", _config.deleteTechnology);
module.exports = router;