"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supplieProducts = exports.productSupplies = exports.deleteSupply = exports.GetSupply = exports.EditSupply = exports.AsingProductSupplie = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database/database");

var _supplies = require("../controllers/supplies");

/**
 * "I want to get all the products that are related to a specific supplier"
 * </code>
 * @param req - the request object
 * @param res - {
 */
var supplieProducts = /*#__PURE__*/function () {
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
            return db.query("SELECT * FROM supply t1 JOIN products t2 JOIN technologies t3 ON t1.FkProductSpy = t2.idProduct AND t2.FkTechnologyPro = t3.idTechnology WHERE t1.FkSupplieSpy=?;", [req.params.id]);

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

  return function supplieProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //10.-Asignar Producto a Proveedor: siempre y cuando el producto ya exista


exports.supplieProducts = supplieProducts;

var AsingProductSupplie = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var db, _ref3, rows, _yield$db$query3, _yield$db$query4, Asing, _yield$db$query5, _yield$db$query6;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context2.sent;
            _ref3 = [], rows = _ref3[0];
            _context2.next = 7;
            return db.query("SELECT * FROM supply WHERE FkSupplieSpy=? AND FkProductSpy =?;", [req.body.FkSupplieSpy, req.body.FkProductSpy]);

          case 7:
            _yield$db$query3 = _context2.sent;
            _yield$db$query4 = (0, _slicedToArray2["default"])(_yield$db$query3, 1);
            Asing = _yield$db$query4[0];

            if (Asing.length) {
              _context2.next = 19;
              break;
            }

            _context2.next = 13;
            return db.query("INSERT INTO supply (FkSupplieSpy, FkProductSpy, price, divisa , deliveryTime, productLine, comments, pDateInitial, pDateUpdate, pSampleF, pSampleLocation) VALUES (?,?,?,?,?,?,?,?,?,?,?);", [req.body.FkSupplieSpy, req.body.FkProductSpy, req.body.price, req.body.divisa, req.body.deliveryTime, req.body.productLine, req.body.comments, (0, _supplies.date)(), (0, _supplies.date)(), req.body.pSampleF, req.body.pSampleLocation]);

          case 13:
            _yield$db$query5 = _context2.sent;
            _yield$db$query6 = (0, _slicedToArray2["default"])(_yield$db$query5, 1);
            rows = _yield$db$query6[0];
            res.json({
              insertId: rows.insertId,
              value: 1
            });
            _context2.next = 20;
            break;

          case 19:
            res.json({
              value: 0
            });

          case 20:
            db.end();
            _context2.next = 26;
            break;

          case 23:
            _context2.prev = 23;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 26:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 23]]);
  }));

  return function AsingProductSupplie(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //14.-Editar Relacion Proveedor Producto


exports.AsingProductSupplie = AsingProductSupplie;

var EditSupply = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
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
            return db.query("UPDATE supply SET price = ?, divisa = ?,deliveryTime =?,productLine =?, comments =?,pDateUpdate =?,pSampleF=?,pSampleLocation=? WHERE idSupply=?;", [req.body.price, req.body.divisa, req.body.deliveryTime, req.body.productLine, req.body.comments, (0, _supplies.date)(), req.body.pSampleF, req.body.pSampleLocation, req.body.idSupply]);

          case 6:
            _yield$db$query7 = _context3.sent;
            _yield$db$query8 = (0, _slicedToArray2["default"])(_yield$db$query7, 1);
            rows = _yield$db$query8[0];

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

  return function EditSupply(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();
/*17.-Eliminar Producto asignado al proveedor
 */


exports.EditSupply = EditSupply;

var deleteSupply = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
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
            return db.query("DELETE FROM supply WHERE idSupply=?;", [req.params.id]);

          case 6:
            _yield$db$query9 = _context4.sent;
            _yield$db$query10 = (0, _slicedToArray2["default"])(_yield$db$query9, 1);
            rows = _yield$db$query10[0];

            if (rows.affectedRows > 0) {
              res.send("Producto eliminado con exito del proveedor");
            } else {
              res.send("No se pudo eliminar el producto del proveedor");
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

  return function deleteSupply(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}(); // Metodo que devuelve la relacion de un proveedor con un producto, pidiendo el Id de la relacion


exports.deleteSupply = deleteSupply;

var GetSupply = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var db, _yield$db$query11, _yield$db$query12, rows;

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
            return db.query("SELECT * FROM supply WHERE idSupply=?;", [req.params.id]);

          case 6:
            _yield$db$query11 = _context5.sent;
            _yield$db$query12 = (0, _slicedToArray2["default"])(_yield$db$query11, 1);
            rows = _yield$db$query12[0];
            rows.length > 0 ? res.json(rows) : res.json([]);
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

  return function GetSupply(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}(); //3.- Devolver todos los proveedores que tienen en venta 1 producto


exports.GetSupply = GetSupply;

var productSupplies = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var db, _yield$db$query13, _yield$db$query14, rows;

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
            return db.query("SELECT * FROM supply  INNER JOIN supplie ON FkSupplieSpy = idSupplie WHERE FkProductSpy=? ORDER BY pDateUpdate;", [req.params.id]);

          case 6:
            _yield$db$query13 = _context6.sent;
            _yield$db$query14 = (0, _slicedToArray2["default"])(_yield$db$query13, 1);
            rows = _yield$db$query14[0];

            if (!rows.length) {
              res.json([]);
            } else {
              res.json(rows);
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

  return function productSupplies(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();

exports.productSupplies = productSupplies;