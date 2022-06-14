"use strict";

var _express = require("express");

var _auth = require("../controllers/auth");

var router = (0, _express.Router)(); //Autenticar Usuario

router.post("/", _auth.serchUser);
router.get("/logout");
module.exports = router;