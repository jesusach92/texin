"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controllers = require("../controllers/controllers");

var router = (0, _express.Router)();
router.get('/proveedores', _controllers.supplielist);
router.get('/productos', _controllers.productlist);
router.get('/proveedores/:id', _controllers.getsuppliebyid);
router.get('/proveedores/productos/:id', _controllers.getproductsbysupplie);
router.get('/productos/:id', _controllers.getproductbyid);
router.get('/productos/proveedores/:id', _controllers.getsuppliebyproduct);
router.post('/agregar/producto', _controllers.addproduct);
router.post('/agregar/proveedor', _controllers.addsupplie);
var _default = router;
exports["default"] = _default;