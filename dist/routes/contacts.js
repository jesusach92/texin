"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _contacts = require("../controllers/contacts");

var contactsRouter = (0, _express.Router)(); // Obtiene todos los contactos del domicilio pasando el Id del domicilio

contactsRouter.get("/:id", _contacts.adressContact); // Obtiene todos los contactos del proveedor

contactsRouter.get("/supplie/:id", _contacts.supplieContacts); //Agrega contacto a Domicilio Devulve el Id del contacto

contactsRouter.post("/", _contacts.addContact); // Actualiza el Contancto y la fecha de Actualizacion del Proveedor

contactsRouter.put("/", _contacts.EditContact); //Borrar contacto de domicilio

contactsRouter["delete"]("/:id", _contacts.deleteContact);
var _default = contactsRouter;
exports["default"] = _default;