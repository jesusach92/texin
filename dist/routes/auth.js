"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = require("../controllers/auth");

var authRouter = (0, _express.Router)(); //Autenticar Usuario

authRouter.post("/", _auth.serchUser);
authRouter.get("/logout");
var _default = authRouter;
exports["default"] = _default;