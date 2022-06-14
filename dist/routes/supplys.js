"use strict";

var _express = require("express");

var _supplys = require("../controllers/supplys");

var router = (0, _express.Router)(); //Devuelve todos los provedores del producto

router.get("/:id", _supplys.productSupplies); //Obtiene la relacion entre proveedor y producto

router.get("/supply/:id", _supplys.GetSupply); // Obtiene todos los productos del Proveedor

router.get("/supplie/:id", _supplys.supplieProducts); //Asigna un producto que ya existe a un proveedor

router.post("/", _supplys.AsingProductSupplie); // Actualiza la relacion entre proveedor y Producto

router.put("/", _supplys.EditSupply); // Borrar Relacion Proveedor-Producto

router["delete"]("/:id", _supplys.deleteSupply);
module.exports = router;