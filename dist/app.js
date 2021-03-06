"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes/routes"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var app = (0, _express["default"])();

_dotenv["default"].config();

app.use((0, _morgan["default"])("dev"));
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_routes["default"]);
var _default = app;
exports["default"] = _default;