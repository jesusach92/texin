"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = require("../controllers/auth");

var routes = (0, _express.Router)(); //Autenticar Usuario

routes.post("/", _auth.serchUser);
routes.get("/logout");
var _default = routes;
exports["default"] = _default;