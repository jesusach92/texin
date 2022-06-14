"use strict";

var _express = require("express");

var _contacts = require("../controllers/contacts");

var router = (0, _express.Router)(); // Obtiene todos los contactos del domicilio pasando el Id del domicilio

router.get("/:id", _contacts.adressContact); // Obtiene todos los contactos del proveedor

router.get("/supplie/:id", _contacts.supplieContacts); //Agrega contacto a Domicilio Devulve el Id del contacto

router.post("/", _contacts.addContact); // Actualiza el Contancto y la fecha de Actualizacion del Proveedor

router.put("/", _contacts.EditContact); //Borrar contacto de domicilio

router["delete"]("/:id", _contacts.deleteContact);
module.exports = router;