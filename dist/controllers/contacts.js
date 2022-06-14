"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supplieContacts = exports.deleteContact = exports.adressContact = exports.addContact = exports.EditContact = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database/database");

var _supplies = require("./supplies");

var adressContact = /*#__PURE__*/function () {
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
            return db.query("SELECT * FROM contactsupplies WHERE FkAdressCont =? ORDER BY contactPrincipal DESC;", [req.params.id]);

          case 6:
            _yield$db$query = _context.sent;
            _yield$db$query2 = (0, _slicedToArray2["default"])(_yield$db$query, 1);
            rows = _yield$db$query2[0];

            if (!rows.length) {
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

  return function adressContact(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //5.-Obtener todos los contactos del proveedor


exports.adressContact = adressContact;

var supplieContacts = /*#__PURE__*/function () {
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
            return db.query("SELECT * FROM supplie t1 JOIN adresssupplie t2 JOIN adresstype t3 JOIN contactsupplies t4 ON t1.idSupplie = t2.FkSupplieAd AND t2.FkadressType = t3.idadressType AND t2.idAdress = t4.FkAdressCont WHERE idSupplie =? ORDER BY t4.contactPrincipal DESC;", [req.params.id]);

          case 6:
            _yield$db$query3 = _context2.sent;
            _yield$db$query4 = (0, _slicedToArray2["default"])(_yield$db$query3, 1);
            rows = _yield$db$query4[0];

            if (!rows.length) {
              res.json([]);
            } else {
              res.json(rows);
            }

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

  return function supplieContacts(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //9.-Agregar Contacto a Domicilio de Proveedor


exports.supplieContacts = supplieContacts;

var addContact = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var db, principalContact, _yield$db$query5, _yield$db$query6, principal, _yield$db$query7, _yield$db$query8, _yield$db$query8$, FkSupplieAd, _yield$db$query9, _yield$db$query10, rows;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context3.sent;
            principalContact = 0;
            _context3.prev = 4;
            _context3.next = 7;
            return db.query("SELECT * FROM contactsupplies WHERE FkAdressCont = ? AND contactPrincipal=1;", [req.body.FkAdressCont]);

          case 7:
            _yield$db$query5 = _context3.sent;
            _yield$db$query6 = (0, _slicedToArray2["default"])(_yield$db$query5, 1);
            principal = _yield$db$query6[0];

            if (!principal.length) {
              principalContact = 1;
            } else {
              principalContact = 0;
            }

            _context3.next = 13;
            return db.query("SELECT FkSupplieAd FROM adresssupplie WHERE idAdress = ?;", [req.body.FkAdressCont]);

          case 13:
            _yield$db$query7 = _context3.sent;
            _yield$db$query8 = (0, _slicedToArray2["default"])(_yield$db$query7, 1);
            _yield$db$query8$ = (0, _slicedToArray2["default"])(_yield$db$query8[0], 1);
            FkSupplieAd = _yield$db$query8$[0].FkSupplieAd;
            (0, _supplies.UpdateSup)(FkSupplieAd, db);
            _context3.next = 20;
            return db.query("INSERT INTO contactsupplies (FkAdressCont, nameContact, contactPrincipal, workposition, officeNumber, cellphoneNumber,emailContact, comments) VALUES (?,?,?,?,?,?,?,?);", [req.body.FkAdressCont, req.body.nameContact, principalContact, req.body.workposition, req.body.officeNumber, req.body.cellphoneNumber, req.body.emailContact, req.body.comments]);

          case 20:
            _yield$db$query9 = _context3.sent;
            _yield$db$query10 = (0, _slicedToArray2["default"])(_yield$db$query9, 1);
            rows = _yield$db$query10[0];
            res.json({
              insertId: rows.insertId,
              value: 1
            });
            _context3.next = 29;
            break;

          case 26:
            _context3.prev = 26;
            _context3.t0 = _context3["catch"](4);
            console.log(_context3.t0);

          case 29:
            db.end();

          case 30:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[4, 26]]);
  }));

  return function addContact(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //12.-Editar Contacto


exports.addContact = addContact;

var EditContact = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var db, _yield$db$query11, _yield$db$query12, rows;

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
            return db.query("UPDATE contactsupplies INNER JOIN adresssupplie INNER JOIN supplie ON FkAdressCont = idAdress AND FkSupplieAd = idSupplie SET contactPrincipal =?, workposition =?, officeNumber=?, cellphoneNumber=?, comments=?, sDateUpdate=? WHERE idContact=?;", [req.body.contactPrincipal, req.body.workposition, req.body.officeNumber, req.body.cellphoneNumber, req.body.comments, (0, _supplies.date)(), req.body.idContact]);

          case 6:
            _yield$db$query11 = _context4.sent;
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

  return function EditContact(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
/*15.-Eliminar Contacto de acuerdo a su Id contact*/


exports.EditContact = EditContact;

var deleteContact = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var db, _yield$db$query13, _yield$db$query14, rows;

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
            return db.query("DELETE FROM contactsupplies WHERE idContact=?;", [req.params.id]);

          case 6:
            _yield$db$query13 = _context5.sent;
            _yield$db$query14 = (0, _slicedToArray2["default"])(_yield$db$query13, 1);
            rows = _yield$db$query14[0];

            if (rows.affectedRows > 0) {
              res.send("Contacto eliminado con exito");
            } else {
              res.send("No se puede eliminar el contacto");
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

  return function deleteContact(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteContact = deleteContact;