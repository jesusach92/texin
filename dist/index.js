"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app.js"));

var PORT = 3001;

_app["default"].listen(PORT, function () {
  console.log("server online on port: " + PORT);
});