"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controllers = require("../controllers/controllers");

var router = (0, _express.Router)(); // Lista a todos los proveedores con domilicio y contacto principal

router.get('/proveedores', _controllers.supplielist); //obtiene los datos del proveedor que corresponde al ID

router.get('/proveedor/:id', _controllers.supplieById); //Obtiene todos los domicilios del proveedor

router.get('/proveedor/domicilios/:id', _controllers.supplieFullAdress); // Obtiene tiene los contactos del domicilio

router.get('/proveedor/domicilio/contactos/:id', _controllers.adressContact); // Obtiene todos los contactos del proveedor

router.get('/proveedor/contactos/:id', _controllers.supplieContacts); // Obtiene todos los productos del Proveedor

router.get('/proveedor/productos/:id', _controllers.supplieProducts); // Metodos de Entrada de Proveedores//
// Agrega Proveedor devuelve el ID del proveedor nuevo

router.post('/agregar/proveedor', _controllers.addSupplie); //Agrega domicilio a Proveedore devuelve el ID del nuevo domicilio

router.post('/agregar/domicilio', _controllers.addAdress); //Agrega contacto a Domicilio Devulve el Id del contacto

router.post('/agregar/contacto', _controllers.addContact); //Asigna un producto que ya existe a un proveedor 

router.post('/Asignar/Producto', _controllers.AsingProductSupplie); // Metodos de Actualizacion de Proveedores
//Actualiza el Domicilio y la fecha de Actualizacion del proveedor

router.put('/Actualizar/Domicilio', _controllers.EditAdress); // Actualiza el Contancto y la fecha de Actualizacion del Proveedor

router.put('/Actualizar/Contacto', _controllers.EditContact); // Actualiza los datos del proveedor y Fecha de Modificacion

router.put('/Actualizar/Proveedor', _controllers.EditSupplie); // Actualiza la relacion entre proveedor y Producto

router.put('/Actualizar/Relacion', _controllers.EditSupply); //Metodos de borrado
//Borrar contacto de domicilio

router["delete"]('/Borrar/contacto/:id', _controllers.deleteContact); // Borrar Domicilios

router["delete"]('/Borrar/Domicilio/:id', _controllers.deleteAdress); // Borrar Relacion Proveedor-Producto

router["delete"]('/Borrar/Relacion/:id', _controllers.deleteSupply); // Borrar Proveedor

router["delete"]('/Borrar/proveedor/:id', _controllers.deleteSupplie); // Metodos de Productos
//Agregar producto sin relacion

router.post('/agregar/producto', _controllers.addProduct); // Actualizar campos del producto

router.put('/Actualizar/Producto', _controllers.editProduct); // Borrar producto y su relacion con los proveedores

router["delete"]('/Borrar/Producto/:id', _controllers.deleteProduct); // Metodos de Configuracion 
//Metodo par agregar tipo de negocio

router.post('/Agregar/negocio', _controllers.addBusinessType); //Metodo para agregar Tecnologia del producto

router.post('/Agregar/Tecnologia', _controllers.addTechnology); // Metodo para agregar clasificacion de proveedor

router.post('/Agregar/Clasificacion', _controllers.addsClasification); //Agregar tipo de domicilio

router.post('/Agregar/TipoDomicilio', _controllers.addaType);
var _default = router;
exports["default"] = _default;