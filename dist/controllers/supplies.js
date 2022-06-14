"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditSupplie = void 0;
exports.UpdateSup = UpdateSup;
exports.supplielist = exports.supplieById = exports.deleteSupplie = exports.date = exports.addSupplie = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database/database");

function UpdateSup(_x, _x2) {
  return _UpdateSup.apply(this, arguments);
} // Fecha de ultima actualizacion


function _UpdateSup() {
  _UpdateSup = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(Id, db) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return db.query("UPDATE supplie SET  supplie.sDateUpdate=? WHERE idSupplie=?;", [date(), Id]);

          case 3:
            _context6.next = 8;
            break;

          case 5:
            _context6.prev = 5;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);

          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 5]]);
  }));
  return _UpdateSup.apply(this, arguments);
}

var date = function date() {
  var fulldate = new Date();
  var date = "".concat(fulldate.getFullYear(), "-").concat(fulldate.getMonth() + 1, "-").concat(fulldate.getDate());
  return date;
};
/* Metodos de los Proveedores*/
// 1.- Listar proveedores con el tipo de negocio y el tipo de proveedor que son


exports.date = date;

var supplielist = /*#__PURE__*/function () {
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
            return db.query("SELECT * FROM supplie t1 JOIN businesstype t2 JOIN sclasification t3 ON t1.FkBusinessType=t2.idBusinessType AND t1.FkClasification=t3.idClasification ORDER BY sDateUpdate DESC;");

          case 6:
            _yield$db$query = _context.sent;
            _yield$db$query2 = (0, _slicedToArray2["default"])(_yield$db$query, 1);
            rows = _yield$db$query2[0];

            if (!rows) {
              res.json([]);
            } else {
              res.json(rows);
            }

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

  return function supplielist(_x3, _x4) {
    return _ref.apply(this, arguments);
  };
}(); // 2.-Obtener Proveedor por Id


exports.supplielist = supplielist;

var supplieById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var db, _yield$db$query3, _yield$db$query4, rows;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context2.sent;
            _context2.prev = 3;
            _context2.next = 6;
            return db.query("SELECT * FROM supplie t1 JOIN businesstype t2 JOIN sclasification t3 ON t1.FkBusinessType = t2.idBusinessType AND t1.FkClasification = t3.idClasification WHERE t1.idSupplie= ?;", [req.params.id]);

          case 6:
            _yield$db$query3 = _context2.sent;
            _yield$db$query4 = (0, _slicedToArray2["default"])(_yield$db$query3, 1);
            rows = _yield$db$query4[0];
            if (!rows.length) res.json([]);else res.json(rows);
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](3);
            console.log(_context2.t0);

          case 15:
            db.end();

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 12]]);
  }));

  return function supplieById(_x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}(); //3.-Agregar Proveedor


exports.supplieById = supplieById;

var addSupplie = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var db, _yield$db$query5, _yield$db$query6, _yield$db$query6$, _yield$db$query6$$, idSupplie;

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
            return db.query("Call InSupplie(?,?,?,?,?,?,?,?,?,?)", [req.body.nameSupplie, req.body.FkBusinessType, req.body.FkClasification, date(), date(), req.body.emailSupplie, req.body.contactPhone, req.body.userRegister, req.body.userUpdate, req.body.webPage]);

          case 6:
            _yield$db$query5 = _context3.sent;
            _yield$db$query6 = (0, _slicedToArray2["default"])(_yield$db$query5, 1);
            _yield$db$query6$ = (0, _slicedToArray2["default"])(_yield$db$query6[0], 1);
            _yield$db$query6$$ = (0, _slicedToArray2["default"])(_yield$db$query6$[0], 1);
            idSupplie = _yield$db$query6$$[0].idSupplie;
            res.json({
              idSupplie: idSupplie,
              value: 1
            });
            db.end();
            _context3.next = 19;
            break;

          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.json({
              value: 0
            });

          case 19:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 15]]);
  }));

  return function addSupplie(_x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}(); //4.-Editar Proveedor


exports.addSupplie = addSupplie;

var EditSupplie = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var db, _yield$db$query7, _yield$db$query8, _yield$db$query8$, _yield$db$query8$$, rows;

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
            return db.query("Call updateSupplie(?,?,?,?,?,?,?,?,?);", [req.body.idSupplie, req.body.nameSupplie, req.body.FkBusinessType, req.body.FkClasification, date(), req.body.emailSupplie, req.body.contactPhone, req.body.userUpdate, req.body.webPage]);

          case 6:
            _yield$db$query7 = _context4.sent;
            _yield$db$query8 = (0, _slicedToArray2["default"])(_yield$db$query7, 1);
            _yield$db$query8$ = (0, _slicedToArray2["default"])(_yield$db$query8[0], 1);
            _yield$db$query8$$ = (0, _slicedToArray2["default"])(_yield$db$query8$[0], 1);
            rows = _yield$db$query8$$[0];

            if (rows !== null && rows !== void 0 && rows.message) {
              res.json({
                value: 1,
                message: "La actualizacion fue realizada correctamente"
              });
            } else {
              res.json({
                value: 0,
                messaje: "No se realizo la actualizacion"
              });
            }

            db.end();
            _context4.next = 18;
            break;

          case 15:
            _context4.prev = 15;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 15]]);
  }));

  return function EditSupplie(_x9, _x10) {
    return _ref4.apply(this, arguments);
  };
}(); //5.-Eliminar Proveedor, eliminar por completo todos los datos relacionados con el proveedor, domicilios, contactos, productos que tenga asignados.


exports.EditSupplie = EditSupplie;

var deleteSupplie = /*#__PURE__*/function () {
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
            return db.query("DELETE FROM supplie WHERE idSupplie=?;", [req.params.id]);

          case 6:
            _yield$db$query9 = _context5.sent;
            _yield$db$query10 = (0, _slicedToArray2["default"])(_yield$db$query9, 1);
            rows = _yield$db$query10[0];

            if (rows.affectedRows > 0) {
              res.send("Proveedor Eliminado con Exito");
            } else {
              res.send("No se pudo eliminar el proveedor");
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

  return function deleteSupplie(_x11, _x12) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteSupplie = deleteSupplie;