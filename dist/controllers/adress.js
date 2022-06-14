"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supplieFullAdress = exports.deleteAdress = exports.addAdress = exports.EditAdress = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database/database");

var _supplies = require("../controllers/supplies");

//1.-Obtener los domicilios del proveedor
var supplieFullAdress = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var db, _yield$db$query, _yield$db$query2, rows;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context.sent;
            _context.prev = 3;
            _context.next = 6;
            return db.query("SELECT * FROM adresssupplie t1 JOIN adresstype t2 ON t1.FkadressType = t2.idadressType WHERE t1.FkSupplieAd =? ORDER BY adressPrincipal DESC;", [req.params.id]);

          case 6:
            _yield$db$query = _context.sent;
            _yield$db$query2 = (0, _slicedToArray2["default"])(_yield$db$query, 1);
            rows = _yield$db$query2[0];

            if (!rows.length) {
              res.json([]);
            } else {
              res.json(rows);
            }

            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](3);
            console.log(_context.t0);

          case 15:
            db.end();

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 12]]);
  }));

  return function supplieFullAdress(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //2.-Agregar Domicilio a proveedor


exports.supplieFullAdress = supplieFullAdress;

var addAdress = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var db, principalAdress, _yield$db$query3, _yield$db$query4, principal, _yield$db$query5, _yield$db$query6, rows;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context2.sent;
            principalAdress = 0;
            _context2.prev = 4;
            _context2.next = 7;
            return db.query("SELECT * FROM adresssupplie WHERE FkSupplieAd=? AND adressPrincipal=1;", [req.body.FkSupplieAd]);

          case 7:
            _yield$db$query3 = _context2.sent;
            _yield$db$query4 = (0, _slicedToArray2["default"])(_yield$db$query3, 1);
            principal = _yield$db$query4[0];

            if (!principal.length) {
              principalAdress = 1;
            } else {
              principalAdress = 0;
            }

            (0, _supplies.UpdateSup)(req.body.FkSupplieAd, db);
            _context2.next = 14;
            return db.query("INSERT INTO adresssupplie (FkSupplieAd, FkadressType, adressPrincipal, adressCountry, adressState, adressDescription, aComments) VALUES (?,?,?,?,?,?,?);", [req.body.FkSupplieAd, req.body.FkadressType, principalAdress, req.body.adressCountry, req.body.adressState, req.body.adressDescription, req.body.aComments]);

          case 14:
            _yield$db$query5 = _context2.sent;
            _yield$db$query6 = (0, _slicedToArray2["default"])(_yield$db$query5, 1);
            rows = _yield$db$query6[0];
            res.json({
              insertId: rows.insertId,
              value: 1
            });
            _context2.next = 23;
            break;

          case 20:
            _context2.prev = 20;
            _context2.t0 = _context2["catch"](4);
            console.log(_context2.t0);

          case 23:
            db.end();

          case 24:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 20]]);
  }));

  return function addAdress(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //3.-Editar Domicilio


exports.addAdress = addAdress;

var EditAdress = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var db, _yield$db$query7, _yield$db$query8, rows;

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
            return db.query("UPDATE adresssupplie  INNER JOIN supplie ON FkSupplieAd = idSupplie SET adressPrincipal = ?, adressDescription = ?, aComments=?, sDateUpdate=? WHERE idAdress= ?;", [req.body.adressPrincipal, req.body.adressDescription, req.body.aComments, date(), req.body.idAdress]);

          case 6:
            _yield$db$query7 = _context3.sent;
            _yield$db$query8 = (0, _slicedToArray2["default"])(_yield$db$query7, 1);
            rows = _yield$db$query8[0];

            if (rows.affectedRows > 0) {
              res.send("La actualizacion fue realizada correctamente");
            } else {
              res.send("No se realizo la actualizacion");
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

  return function EditAdress(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
/*4.-Eliminar Domicilio de acuerdo con su Id de domicilio
 */


exports.EditAdress = EditAdress;

var deleteAdress = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var db, _yield$db$query9, _yield$db$query10, rows;

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
            return db.query("DELETE FROM adresssupplie WHERE idAdress=?;", [req.params.id]);

          case 6:
            _yield$db$query9 = _context4.sent;
            _yield$db$query10 = (0, _slicedToArray2["default"])(_yield$db$query9, 1);
            rows = _yield$db$query10[0];

            if (rows.affectedRows > 0) {
              res.send("Domicilio eliminado con exito");
            } else {
              res.send("No se puede eliminar el contacto");
            }

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

  return function deleteAdress(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteAdress = deleteAdress;