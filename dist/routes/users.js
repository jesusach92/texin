"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _users = require("../controllers/users");

var _config = require("../controllers/config");

var usersRouter = (0, _express.Router)(); //Obtener Data para el Usuario

usersRouter.get("/DataAdmin", _config.getDataAdmin); //Obtener Lista de Usuarios para Admin

usersRouter.get("/UsersAdmin", _users.getListUsers); // Registrar Usuario
// Obtener los Roles a Asignar

usersRouter.get("/Roles", _users.getRoleUser); //Registrar Usuario

usersRouter.post("/", _users.addUser); //Borrar Usuario

usersRouter["delete"]("/:id", _users.deleteUSer); //Actualizar Usuario

usersRouter.put("/", _users.updateUser);
var _default = usersRouter;
exports["default"] = _default;