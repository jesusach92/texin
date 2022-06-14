"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateBusinessType = exports.updateAddType = exports.listTech = exports.listSClasificacion = exports.listBusiness = exports.listAType = exports.getDataAdmin = exports.deleteTechnology = exports.deleteSclasification = exports.deleteBusinessType = exports.deleteAddType = exports.addsClasification = exports.addaType = exports.addTechnology = exports.addBusinessType = exports.UpdatesClasification = exports.UpdateTechnology = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database/database");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/*Metodos Generales de configuracion*/
// Agregar Tipo de Negocio para clasificar
var addBusinessType = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var db, _yield$db$query, _yield$db$query2, rows;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context.sent;
            _context.next = 6;
            return db.query("INSERT INTO businesstype (bName, bDescription) VALUES (?,?);", [req.body.bName, req.body.bDescription]);

          case 6:
            _yield$db$query = _context.sent;
            _yield$db$query2 = (0, _slicedToArray2["default"])(_yield$db$query, 1);
            rows = _yield$db$query2[0];
            res.json({
              value: 1
            });
            db.end();
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));

  return function addBusinessType(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // Metodo para actualizar tipo de negocio


exports.addBusinessType = addBusinessType;

var updateBusinessType = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var db, _yield$db$query3, _yield$db$query4, rows;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context2.sent;
            _context2.next = 6;
            return db.query("UPDATE businesstype SET bName = ?, bDescription=? WHERE idBusinessType =?;", [req.body.bName, req.body.bDescription, req.body.idBusinessType]);

          case 6:
            _yield$db$query3 = _context2.sent;
            _yield$db$query4 = (0, _slicedToArray2["default"])(_yield$db$query3, 1);
            rows = _yield$db$query4[0];

            if (rows.affectedRows > 0) {
              res.json({
                value: 1
              });
            } else {
              res.json({
                value: 0
              });
            }

            db.end();
            _context2.next = 16;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 13]]);
  }));

  return function updateBusinessType(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // Metodo para borrar tipo de negocio


exports.updateBusinessType = updateBusinessType;

var deleteBusinessType = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var db, _yield$db$query5, _yield$db$query6, rows;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context3.sent;
            _context3.next = 6;
            return db.query("DELETE FROM businesstype WHERE idBusinessType=?", [req.params.id]);

          case 6:
            _yield$db$query5 = _context3.sent;
            _yield$db$query6 = (0, _slicedToArray2["default"])(_yield$db$query5, 1);
            rows = _yield$db$query6[0];

            if (rows.affectedRows > 0) {
              res.json({
                value: 1
              });
            } else {
              res.json({
                value: 0
              });
            }

            db.end();
            _context3.next = 16;
            break;

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 13]]);
  }));

  return function deleteBusinessType(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); // Metodo para agregar Clasificacion de Productos


exports.deleteBusinessType = deleteBusinessType;

var addTechnology = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var db, _yield$db$query7, _yield$db$query8, rows;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context4.sent;
            _context4.next = 6;
            return db.query("INSERT INTO technologies (nameTechnology) VALUES (?);", [req.body.nameTechnology]);

          case 6:
            _yield$db$query7 = _context4.sent;
            _yield$db$query8 = (0, _slicedToArray2["default"])(_yield$db$query7, 1);
            rows = _yield$db$query8[0];
            res.json({
              value: 1
            });
            db.end();
            _context4.next = 16;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 13]]);
  }));

  return function addTechnology(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); //Metodo para actualizar Tecnologia de Productos


exports.addTechnology = addTechnology;

var UpdateTechnology = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var db, _yield$db$query9, _yield$db$query10, rows;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context5.sent;
            _context5.next = 6;
            return db.query("UPDATE technologies SET nameTechnology = ? WHERE idTechnology = ?;", [req.body.nameTechnology, req.body.idTechnology]);

          case 6:
            _yield$db$query9 = _context5.sent;
            _yield$db$query10 = (0, _slicedToArray2["default"])(_yield$db$query9, 1);
            rows = _yield$db$query10[0];

            if (rows.affectedRows > 0) {
              res.json({
                value: 1
              });
            } else {
              res.json({
                value: 0
              });
            }

            db.end();
            _context5.next = 16;
            break;

          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 13]]);
  }));

  return function UpdateTechnology(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); // Borrar Tipo de Tecnologia 


exports.UpdateTechnology = UpdateTechnology;

var deleteTechnology = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var db, _yield$db$query11, _yield$db$query12, rows;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context6.sent;
            _context6.next = 6;
            return db.query("DELETE FROM technologies WHERE idTechnology=?", [req.params.id]);

          case 6:
            _yield$db$query11 = _context6.sent;
            _yield$db$query12 = (0, _slicedToArray2["default"])(_yield$db$query11, 1);
            rows = _yield$db$query12[0];

            if (rows.affectedRows > 0) {
              res.json({
                value: 1
              });
            } else {
              res.json({
                value: 0
              });
            }

            db.end();
            _context6.next = 16;
            break;

          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 13]]);
  }));

  return function deleteTechnology(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}(); // Metodo para agregar Clasificacion de Proveedores


exports.deleteTechnology = deleteTechnology;

var addsClasification = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var db, _yield$db$query13, _yield$db$query14, rows;

    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context7.sent;
            _context7.next = 6;
            return db.query("INSERT INTO sclasification (clasificationName) VALUES (?);", [req.body.clasificationName]);

          case 6:
            _yield$db$query13 = _context7.sent;
            _yield$db$query14 = (0, _slicedToArray2["default"])(_yield$db$query13, 1);
            rows = _yield$db$query14[0];
            res.json({
              value: 1
            });
            db.end();
            _context7.next = 16;
            break;

          case 13:
            _context7.prev = 13;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);

          case 16:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 13]]);
  }));

  return function addsClasification(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}(); // Metodo para actualizar clasificacion 


exports.addsClasification = addsClasification;

var UpdatesClasification = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var db, _yield$db$query15, _yield$db$query16, rows;

    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context8.sent;
            _context8.next = 6;
            return db.query("UPDATE sclasification SET clasificationName = ? WHERE idClasification = ?;", [req.body.clasificationName, req.body.idClasification]);

          case 6:
            _yield$db$query15 = _context8.sent;
            _yield$db$query16 = (0, _slicedToArray2["default"])(_yield$db$query15, 1);
            rows = _yield$db$query16[0];

            if (rows.affectedRows > 0) {
              res.json({
                value: 1
              });
            } else {
              res.json({
                value: 0
              });
            }

            db.end();
            _context8.next = 16;
            break;

          case 13:
            _context8.prev = 13;
            _context8.t0 = _context8["catch"](0);
            console.log(_context8.t0);

          case 16:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 13]]);
  }));

  return function UpdatesClasification(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}(); // Metodo para borrar clasificacion de proveedor 


exports.UpdatesClasification = UpdatesClasification;

var deleteSclasification = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var db, _yield$db$query17, _yield$db$query18, rows;

    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context9.sent;
            _context9.next = 6;
            return db.query("DELETE FROM sclasification WHERE idClasification=?", [req.params.id]);

          case 6:
            _yield$db$query17 = _context9.sent;
            _yield$db$query18 = (0, _slicedToArray2["default"])(_yield$db$query17, 1);
            rows = _yield$db$query18[0];

            if (rows.affectedRows > 0) {
              res.json({
                value: 1
              });
            } else {
              res.json({
                value: 0
              });
            }

            db.end();
            _context9.next = 16;
            break;

          case 13:
            _context9.prev = 13;
            _context9.t0 = _context9["catch"](0);
            console.log(_context9.t0);

          case 16:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 13]]);
  }));

  return function deleteSclasification(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}(); //Metodo para agregar Tipos de Domicilio


exports.deleteSclasification = deleteSclasification;

var addaType = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var db, _yield$db$query19, _yield$db$query20, rows;

    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context10.sent;
            _context10.prev = 3;
            _context10.next = 6;
            return db.query("INSERT INTO adresstype (aType) VALUES (?);", [req.body.aType]);

          case 6:
            _yield$db$query19 = _context10.sent;
            _yield$db$query20 = (0, _slicedToArray2["default"])(_yield$db$query19, 1);
            rows = _yield$db$query20[0];
            res.json({
              value: 1
            });
            _context10.next = 15;
            break;

          case 12:
            _context10.prev = 12;
            _context10.t0 = _context10["catch"](3);
            console.log(_context10.t0);

          case 15:
            db.end();

          case 16:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[3, 12]]);
  }));

  return function addaType(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}(); // Metodo para Actualizar Tipos de Domicilio


exports.addaType = addaType;

var updateAddType = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    var db, _yield$db$query21, _yield$db$query22, rows;

    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context11.sent;
            _context11.next = 6;
            return db.query("UPDATE adresstype SET aType = ? WHERE idadressType = ?;", [req.body.aType, req.body.idadressType]);

          case 6:
            _yield$db$query21 = _context11.sent;
            _yield$db$query22 = (0, _slicedToArray2["default"])(_yield$db$query21, 1);
            rows = _yield$db$query22[0];

            if (rows.affectedRows > 0) {
              res.json({
                value: 1
              });
            } else {
              res.json({
                value: 0
              });
            }

            db.end();
            _context11.next = 16;
            break;

          case 13:
            _context11.prev = 13;
            _context11.t0 = _context11["catch"](0);
            console.log(_context11.t0);

          case 16:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 13]]);
  }));

  return function updateAddType(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}(); // Metodo para borrar tipo de domicilio


exports.updateAddType = updateAddType;

var deleteAddType = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res) {
    var db, _yield$db$query23, _yield$db$query24, rows;

    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            _context12.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context12.sent;
            _context12.next = 6;
            return db.query("DELETE FROM adresstype WHERE idadressType=?", [req.params.id]);

          case 6:
            _yield$db$query23 = _context12.sent;
            _yield$db$query24 = (0, _slicedToArray2["default"])(_yield$db$query23, 1);
            rows = _yield$db$query24[0];

            if (rows.affectedRows > 0) {
              res.json({
                value: 1
              });
            } else {
              res.json({
                value: 0
              });
            }

            db.end();
            _context12.next = 16;
            break;

          case 13:
            _context12.prev = 13;
            _context12.t0 = _context12["catch"](0);
            console.log(_context12.t0);

          case 16:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[0, 13]]);
  }));

  return function deleteAddType(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}(); // Metodo para listar las tenologias del producto


exports.deleteAddType = deleteAddType;

var listTech = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req, res) {
    var db, _yield$db$query25, _yield$db$query26, rows;

    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context13.sent;
            _context13.next = 5;
            return db.query("SELECT * FROM technologies;");

          case 5:
            _yield$db$query25 = _context13.sent;
            _yield$db$query26 = (0, _slicedToArray2["default"])(_yield$db$query25, 1);
            rows = _yield$db$query26[0];

            if (!rows) {
              res.json([]);
            } else {
              res.json(rows);
            }

            db.end();

          case 10:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function listTech(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}(); //Metodo para listar los tipos de domicilio


exports.listTech = listTech;

var listAType = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(req, res) {
    var db, _yield$db$query27, _yield$db$query28, rows;

    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context14.sent;
            _context14.next = 5;
            return db.query("SELECT * FROM adresstype;");

          case 5:
            _yield$db$query27 = _context14.sent;
            _yield$db$query28 = (0, _slicedToArray2["default"])(_yield$db$query27, 1);
            rows = _yield$db$query28[0];

            if (!rows) {
              res.json([]);
            } else {
              res.json(rows);
            }

            db.end();

          case 10:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));

  return function listAType(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}(); //Metodo para listar los tipos de negocio


exports.listAType = listAType;

var listBusiness = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(req, res) {
    var db, _yield$db$query29, _yield$db$query30, rows;

    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context15.sent;
            _context15.next = 5;
            return db.query("SELECT * FROM businesstype;");

          case 5:
            _yield$db$query29 = _context15.sent;
            _yield$db$query30 = (0, _slicedToArray2["default"])(_yield$db$query29, 1);
            rows = _yield$db$query30[0];

            if (!rows) {
              res.json([]);
            } else {
              res.json(rows);
            }

            db.end();

          case 10:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));

  return function listBusiness(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}(); // Metodo para listar la clasificacion de proveddores


exports.listBusiness = listBusiness;

var listSClasificacion = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(req, res) {
    var db, _yield$db$query31, _yield$db$query32, rows;

    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.prev = 0;
            _context16.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context16.sent;
            _context16.next = 6;
            return db.query("SELECT * FROM sclasification;");

          case 6:
            _yield$db$query31 = _context16.sent;
            _yield$db$query32 = (0, _slicedToArray2["default"])(_yield$db$query31, 1);
            rows = _yield$db$query32[0];

            if (!rows) {
              res.json([]);
            } else {
              res.json(rows);
            }

            db.end();
            _context16.next = 16;
            break;

          case 13:
            _context16.prev = 13;
            _context16.t0 = _context16["catch"](0);
            console.log(_context16.t0);

          case 16:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16, null, [[0, 13]]);
  }));

  return function listSClasificacion(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();
/**
 * It's a function that connects to a database, queries the database, and returns the results of the
 * query.
 * </code>
 * @param req - The request object.
 * @param res - The response object.
 */


exports.listSClasificacion = listSClasificacion;

var getDataAdmin = /*#__PURE__*/function () {
  var _ref17 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(req, res) {
    var data, db, _yield$db$query33, _yield$db$query34, _yield$db$query34$, rows, _yield$db$query35, _yield$db$query36, _yield$db$query36$, _yield$db$query37, _yield$db$query38, _yield$db$query38$;

    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.prev = 0;
            _context17.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context17.sent;
            _context17.next = 6;
            return db.query("SELECT count(idSupplie) AS Proveedores FROM supplie;");

          case 6:
            _yield$db$query33 = _context17.sent;
            _yield$db$query34 = (0, _slicedToArray2["default"])(_yield$db$query33, 1);
            _yield$db$query34$ = (0, _slicedToArray2["default"])(_yield$db$query34[0], 1);
            rows = _yield$db$query34$[0];
            data = _objectSpread(_objectSpread({}, data), {}, {
              Proveedores: rows.Proveedores
            });
            _context17.next = 13;
            return db.query("SELECT count(idProduct) AS Productos FROM products;");

          case 13:
            _yield$db$query35 = _context17.sent;
            _yield$db$query36 = (0, _slicedToArray2["default"])(_yield$db$query35, 1);
            _yield$db$query36$ = (0, _slicedToArray2["default"])(_yield$db$query36[0], 1);
            rows = _yield$db$query36$[0];
            data = _objectSpread(_objectSpread({}, data), {}, {
              Productos: rows.Productos
            });
            _context17.next = 20;
            return db.query("SELECT count(idContact) AS Contactos FROM contactsupplies;");

          case 20:
            _yield$db$query37 = _context17.sent;
            _yield$db$query38 = (0, _slicedToArray2["default"])(_yield$db$query37, 1);
            _yield$db$query38$ = (0, _slicedToArray2["default"])(_yield$db$query38[0], 1);
            rows = _yield$db$query38$[0];
            data = _objectSpread(_objectSpread({}, data), {}, {
              Contactos: rows.Contactos
            });
            res.json(data);
            _context17.next = 31;
            break;

          case 28:
            _context17.prev = 28;
            _context17.t0 = _context17["catch"](0);
            console.log(_context17.t0);

          case 31:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17, null, [[0, 28]]);
  }));

  return function getDataAdmin(_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}();

exports.getDataAdmin = getDataAdmin;