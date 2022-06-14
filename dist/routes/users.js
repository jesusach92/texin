"use strict";

var _express = require("express");

var _users = require("../controllers/users");

var _config = require("../controllers/config");

var router = (0, _express.Router)(); //Obtener Data para el Usuario

router.get("/DataAdmin", _config.getDataAdmin); //Obtener Lista de Usuarios para Admin

router.get("/UsersAdmin", _users.getListUsers); // Registrar Usuario
// Obtener los Roles a Asignar

router.get("/Roles", _users.getRoleUser); //Registrar Usuario

router.post("/", _users.addUser); //Borrar Usuario

router["delete"]("/:id", _users.deleteUSer); //Actualizar Usuario

router.put("/", _users.updateUser);
module.exports = router;