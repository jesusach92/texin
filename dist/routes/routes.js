"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controllers = require("../controllers/controllers");

var _users = require("../controllers/users");

var router = (0, _express.Router)(); // Lista a todos los proveedores con tipo de negocio y clasificacion

router.get("/proveedores", _controllers.supplielist); //obtiene los datos del proveedor que corresponde al ID

router.get("/proveedor/:id", _controllers.supplieById); //Obtiene todos los domicilios del proveedor

router.get("/proveedor/domicilios/:id", _controllers.supplieFullAdress); // Obtiene todos los contactos del domicilio pasando el Id del domicilio

router.get("/proveedor/domicilio/contactos/:id", _controllers.adressContact); // Obtiene todos los contactos del proveedor

router.get("/proveedor/contactos/:id", _controllers.supplieContacts); // Obtiene todos los productos del Proveedor

router.get("/proveedor/productos/:id", _controllers.supplieProducts); //Obtiene la relacion entre proveedor y producto

router.get("/Proveedor/Producto/:id", _controllers.GetSupply); // Metodos de Entrada de Proveedores//
// Agrega Proveedor devuelve el ID del proveedor nuevo

router.post("/Agregar/proveedor", _controllers.addSupplie); //Agrega domicilio a Proveedore devuelve el ID del nuevo domicilio

router.post("/Agregar/domicilio", _controllers.addAdress); //Agrega contacto a Domicilio Devulve el Id del contacto

router.post("/Agregar/contacto", _controllers.addContact); //Asigna un producto que ya existe a un proveedor

router.post("/Asignar/Producto", _controllers.AsingProductSupplie); // Metodos de Actualizacion de Proveedores
//Actualiza el Domicilio y la fecha de Actualizacion del proveedor

router.put("/Actualizar/Domicilio", _controllers.EditAdress); // Actualiza el Contancto y la fecha de Actualizacion del Proveedor

router.put("/Actualizar/Contacto", _controllers.EditContact); // Actualiza los datos del proveedor y Fecha de Modificacion

router.put("/Actualizar/Proveedor", _controllers.EditSupplie); // Actualiza la relacion entre proveedor y Producto

router.put("/Actualizar/Relacion", _controllers.EditSupply); //Metodos de borrado
//Borrar contacto de domicilio

router["delete"]("/Borrar/contacto/:id", _controllers.deleteContact); // Borrar Domicilios

router["delete"]("/Borrar/Domicilio/:id", _controllers.deleteAdress); // Borrar Relacion Proveedor-Producto

router["delete"]("/Borrar/Relacion/:id", _controllers.deleteSupply); // Borrar Proveedor

router["delete"]("/Borrar/proveedor/:id", _controllers.deleteSupplie); // Metodos de Productos
// Listar productos con Nombre del producto, tecnologia, descripcion

router.get("/productos", _controllers.productlist); // Mostrar datos de producto por Id

router.get("/Producto/:id", _controllers.productId);
router.get("/Producto/Proveedores/:id", _controllers.productSupplies); //Agregar producto sin relacion

router.post("/agregar/producto", _controllers.addProduct); // Actualizar campos del producto

router.put("/Actualizar/Producto", _controllers.editProduct); // Borrar producto y su relacion con los proveedores

router["delete"]("/Borrar/Producto/:id", _controllers.deleteProduct); // Metodos de Configuracion
//Metodo para agregar tipo de negocio

router.post("/Agregar/Negocio", _controllers.addBusinessType); //Metodo para agregar Tecnologia del producto

router.post("/Agregar/Tecnologia", _controllers.addTechnology); //Metodo para que regresa los tipos de tecnolocia que existen

router.get("/Tecnologias", _controllers.listTech); // Metodo para agregar clasificacion de proveedor

router.post("/Agregar/Clasificacion", _controllers.addsClasification); //Agregar tipo de domicilio

router.post("/Agregar/TipoDomicilio", _controllers.addaType); //Metodo que devuelve los tipos de domicilio

router.get("/TiposDom", _controllers.listAType); //Metodo que devuelve los tipos de negocios

router.get("/Negocios", _controllers.listBusiness); // Metodo que devuelve las clasificaciones de un proveedor

router.get("/Clasificacion", _controllers.listSClasificacion); // Metodo de Actualizacion de Tipos de Negocio

router.put("/Actualizar/Negocio", _controllers.updateBusinessType); // Ruta para Actualizar el tipo de Tenologia

router.put("/Actualizar/Tecnologia", _controllers.UpdateTechnology); // Ruta para Actualizar Clasificacion de Proveedor

router.put("/Actualizar/Clasificacion", _controllers.UpdatesClasification); //Ruta para Actualizar Tipo de Domicilio

router.put("/Actualizar/TipoDomicilio", _controllers.updateAddType); // Registrar Usuario

router.post("/Registrar/usuario", _users.userRegister); //Autenticar Usuario

router.post("/Autenticar", _users.serchUser);
var _default = router;
exports["default"] = _default;