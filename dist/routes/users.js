"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _users = require("../controllers/users");

var _config = require("../controllers/config");

var routes = (0, _express.Router)(); //Obtener Data para el Usuario

routes.get("/DataAdmin", _config.getDataAdmin); //Obtener Lista de Usuarios para Admin

routes.get("/UsersAdmin", _users.getListUsers); // Registrar Usuario
// Obtener los Roles a Asignar

routes.get("/Roles", _users.getRoleUser); //Registrar Usuario

routes.post("/", _users.addUser); //Borrar Usuario

routes["delete"]("/:id", _users.deleteUSer); //Actualizar Usuario

routes.put("/", _users.updateUser);
var _default = routes;
exports["default"] = _default;