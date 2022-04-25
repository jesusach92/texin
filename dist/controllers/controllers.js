"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateBusinessType = exports.updateAddType = exports.supplielist = exports.supplieProducts = exports.supplieFullAdress = exports.supplieContacts = exports.supplieById = exports.productlist = exports.productSupplies = exports.productId = exports.listTech = exports.listSClasificacion = exports.listBusiness = exports.listAType = exports.editProduct = exports.deleteSupply = exports.deleteSupplie = exports.deleteProduct = exports.deleteContact = exports.deleteAdress = exports.adressContact = exports.addsClasification = exports.addaType = exports.addTechnology = exports.addSupplie = exports.addProduct = exports.addContact = exports.addBusinessType = exports.addAdress = exports.UpdatesClasification = exports.UpdateTechnology = exports.GetSupply = exports.EditSupply = exports.EditSupplie = exports.EditContact = exports.EditAdress = exports.AsingProductSupplie = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database/database");

function UpdateSup(_x, _x2) {
  return _UpdateSup.apply(this, arguments);
} // Fecha de ultima actualizacion


function _UpdateSup() {
  _UpdateSup = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee38(Id, db) {
    return _regenerator["default"].wrap(function _callee38$(_context38) {
      while (1) {
        switch (_context38.prev = _context38.next) {
          case 0:
            _context38.prev = 0;
            _context38.next = 3;
            return db.query("UPDATE supplie SET  supplie.sDateUpdate=? WHERE idSupplie=?;", [date(), Id]);

          case 3:
            _context38.next = 8;
            break;

          case 5:
            _context38.prev = 5;
            _context38.t0 = _context38["catch"](0);
            console.log(_context38.t0);

          case 8:
          case "end":
            return _context38.stop();
        }
      }
    }, _callee38, null, [[0, 5]]);
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
}(); //3.-Obtener los domicilios del proveedor


exports.supplieById = supplieById;

var supplieFullAdress = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var db, _yield$db$query5, _yield$db$query6, rows;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context3.sent;
            _context3.prev = 3;
            _context3.next = 6;
            return db.query("SELECT * FROM adresssupplie t1 JOIN adresstype t2 ON t1.FkadressType = t2.idadressType WHERE t1.FkSupplieAd =? ORDER BY adressPrincipal DESC;", [req.params.id]);

          case 6:
            _yield$db$query5 = _context3.sent;
            _yield$db$query6 = (0, _slicedToArray2["default"])(_yield$db$query5, 1);
            rows = _yield$db$query6[0];

            if (!rows.length) {
              res.json([]);
            } else {
              res.json(rows);
            }

            _context3.next = 15;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](3);
            console.log(_context3.t0);

          case 15:
            db.end();

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 12]]);
  }));

  return function supplieFullAdress(_x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}(); //4.-Obtener los contactos del domicilio


exports.supplieFullAdress = supplieFullAdress;

var adressContact = /*#__PURE__*/function () {
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
            return db.query("SELECT * FROM contactsupplies WHERE FkAdressCont =? ORDER BY contactPrincipal DESC;", [req.params.id]);

          case 6:
            _yield$db$query7 = _context4.sent;
            _yield$db$query8 = (0, _slicedToArray2["default"])(_yield$db$query7, 1);
            rows = _yield$db$query8[0];

            if (!rows.length) {
              res.json([]);
            } else {
              res.json(rows);
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

  return function adressContact(_x9, _x10) {
    return _ref4.apply(this, arguments);
  };
}(); //5.-Obtener todos los contactos del proveedor


exports.adressContact = adressContact;

var supplieContacts = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var db, _yield$db$query9, _yield$db$query10, rows;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context5.sent;
            _context5.prev = 3;
            _context5.next = 6;
            return db.query("SELECT * FROM supplie t1 JOIN adresssupplie t2 JOIN adresstype t3 JOIN contactsupplies t4 ON t1.idSupplie = t2.FkSupplieAd AND t2.FkadressType = t3.idadressType AND t2.idAdress = t4.FkAdressCont WHERE idSupplie =? ORDER BY t4.contactPrincipal DESC;", [req.params.id]);

          case 6:
            _yield$db$query9 = _context5.sent;
            _yield$db$query10 = (0, _slicedToArray2["default"])(_yield$db$query9, 1);
            rows = _yield$db$query10[0];

            if (!rows.length) {
              res.json([]);
            } else {
              res.json(rows);
            }

            _context5.next = 15;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](3);
            console.log(_context5.t0);

          case 15:
            db.end();

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[3, 12]]);
  }));

  return function supplieContacts(_x11, _x12) {
    return _ref5.apply(this, arguments);
  };
}(); //6.-Obtener todos los productos que el proveedor tiene registrados


exports.supplieContacts = supplieContacts;

var supplieProducts = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var db, _yield$db$query11, _yield$db$query12, rows;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context6.sent;
            _context6.prev = 3;
            _context6.next = 6;
            return db.query("SELECT * FROM supply t1 JOIN products t2 JOIN technologies t3 ON t1.FkProductSpy = t2.idProduct AND t2.FkTechnologyPro = t3.idTechnology WHERE t1.FkSupplieSpy=?;", [req.params.id]);

          case 6:
            _yield$db$query11 = _context6.sent;
            _yield$db$query12 = (0, _slicedToArray2["default"])(_yield$db$query11, 1);
            rows = _yield$db$query12[0];

            if (!rows.length) {
              res.json([]);
            } else {
              res.json(rows);
            }

            _context6.next = 15;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](3);
            console.log(_context6.t0);

          case 15:
            db.end();

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[3, 12]]);
  }));

  return function supplieProducts(_x13, _x14) {
    return _ref6.apply(this, arguments);
  };
}(); //7.-Agregar Proveedor


exports.supplieProducts = supplieProducts;

var addSupplie = /*#__PURE__*/function () {
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
            return db.query("INSERT INTO supplie (nameSupplie, FkBusinessType, FkClasification, sDateInitial, sDateUpdate) VALUES (?, ?, ?, ?, ?); ", [req.body.nameSupplie, req.body.FkBusinessType, req.body.FkClasification, date(), date()]);

          case 6:
            _yield$db$query13 = _context7.sent;
            _yield$db$query14 = (0, _slicedToArray2["default"])(_yield$db$query13, 1);
            rows = _yield$db$query14[0];
            res.json({
              insertId: rows.insertId,
              value: 1
            });
            db.end();
            _context7.next = 16;
            break;

          case 13:
            _context7.prev = 13;
            _context7.t0 = _context7["catch"](0);
            res.json({
              value: 0
            });

          case 16:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 13]]);
  }));

  return function addSupplie(_x15, _x16) {
    return _ref7.apply(this, arguments);
  };
}(); //8.-Agregar Domicilio a proveedor


exports.addSupplie = addSupplie;

var addAdress = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var db, principalAdress, _yield$db$query15, _yield$db$query16, principal, _yield$db$query17, _yield$db$query18, rows;

    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context8.sent;
            principalAdress = 0;
            _context8.prev = 4;
            _context8.next = 7;
            return db.query("SELECT * FROM adresssupplie WHERE FkSupplieAd=? AND adressPrincipal=1;", [req.body.FkSupplieAd]);

          case 7:
            _yield$db$query15 = _context8.sent;
            _yield$db$query16 = (0, _slicedToArray2["default"])(_yield$db$query15, 1);
            principal = _yield$db$query16[0];

            if (!principal.length) {
              principalAdress = 1;
            } else {
              principalAdress = 0;
            }

            UpdateSup(req.body.FkSupplieAd, db);
            _context8.next = 14;
            return db.query("INSERT INTO adresssupplie (FkSupplieAd, FkadressType, adressPrincipal, adressCountry, adressState, adressDescription, aComments) VALUES (?,?,?,?,?,?,?);", [req.body.FkSupplieAd, req.body.FkadressType, principalAdress, req.body.adressCountry, req.body.adressState, req.body.adressDescription, req.body.aComments]);

          case 14:
            _yield$db$query17 = _context8.sent;
            _yield$db$query18 = (0, _slicedToArray2["default"])(_yield$db$query17, 1);
            rows = _yield$db$query18[0];
            res.json({
              insertId: rows.insertId,
              value: 1
            });
            _context8.next = 23;
            break;

          case 20:
            _context8.prev = 20;
            _context8.t0 = _context8["catch"](4);
            console.log(_context8.t0);

          case 23:
            db.end();

          case 24:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[4, 20]]);
  }));

  return function addAdress(_x17, _x18) {
    return _ref8.apply(this, arguments);
  };
}(); //9.-Agregar Contacto a Domicilio de Proveedor


exports.addAdress = addAdress;

var addContact = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var db, principalContact, _yield$db$query19, _yield$db$query20, principal, _yield$db$query21, _yield$db$query22, _yield$db$query22$, FkSupplieAd, _yield$db$query23, _yield$db$query24, rows;

    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context9.sent;
            principalContact = 0;
            _context9.prev = 4;
            _context9.next = 7;
            return db.query("SELECT * FROM contactsupplies WHERE FkAdressCont = ? AND contactPrincipal=1;", [req.body.FkAdressCont]);

          case 7:
            _yield$db$query19 = _context9.sent;
            _yield$db$query20 = (0, _slicedToArray2["default"])(_yield$db$query19, 1);
            principal = _yield$db$query20[0];

            if (!principal.length) {
              principalContact = 1;
            } else {
              principalContact = 0;
            }

            _context9.next = 13;
            return db.query("SELECT FkSupplieAd FROM adresssupplie WHERE idAdress = ?;", [req.body.FkAdressCont]);

          case 13:
            _yield$db$query21 = _context9.sent;
            _yield$db$query22 = (0, _slicedToArray2["default"])(_yield$db$query21, 1);
            _yield$db$query22$ = (0, _slicedToArray2["default"])(_yield$db$query22[0], 1);
            FkSupplieAd = _yield$db$query22$[0].FkSupplieAd;
            UpdateSup(FkSupplieAd, db);
            _context9.next = 20;
            return db.query("INSERT INTO contactsupplies (FkAdressCont, nameContact, contactPrincipal, workposition, officeNumber, cellphoneNumber, comments) VALUES (?,?,?,?,?,?,?);", [req.body.FkAdressCont, req.body.nameContact, principalContact, req.body.workposition, req.body.officeNumber, req.body.cellphoneNumber, req.body.comments]);

          case 20:
            _yield$db$query23 = _context9.sent;
            _yield$db$query24 = (0, _slicedToArray2["default"])(_yield$db$query23, 1);
            rows = _yield$db$query24[0];
            res.json({
              insertId: rows.insertId,
              value: 1
            });
            _context9.next = 29;
            break;

          case 26:
            _context9.prev = 26;
            _context9.t0 = _context9["catch"](4);
            console.log(_context9.t0);

          case 29:
            db.end();

          case 30:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[4, 26]]);
  }));

  return function addContact(_x19, _x20) {
    return _ref9.apply(this, arguments);
  };
}(); //10.-Asignar Producto a Proveedor: siempre y cuando el producto ya exista


exports.addContact = addContact;

var AsingProductSupplie = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var db, _ref11, rows, _yield$db$query25, _yield$db$query26, Asing, _yield$db$query27, _yield$db$query28;

    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context10.sent;
            _ref11 = [], rows = _ref11[0];
            _context10.next = 7;
            return db.query("SELECT * FROM supply WHERE FkSupplieSpy=? AND FkProductSpy =?;", [req.body.FkSupplieSpy, req.body.FkProductSpy]);

          case 7:
            _yield$db$query25 = _context10.sent;
            _yield$db$query26 = (0, _slicedToArray2["default"])(_yield$db$query25, 1);
            Asing = _yield$db$query26[0];

            if (Asing.length) {
              _context10.next = 19;
              break;
            }

            _context10.next = 13;
            return db.query("INSERT INTO supply (FkSupplieSpy, FkProductSpy, price, divisa , deliveryTime, productLine, comments, pDateInitial, pDateUpdate, pSampleF, pSampleLocation) VALUES (?,?,?,?,?,?,?,?,?,?,?);", [req.body.FkSupplieSpy, req.body.FkProductSpy, req.body.price, req.body.divisa, req.body.deliveryTime, req.body.productLine, req.body.comments, date(), date(), req.body.pSampleF, req.body.pSampleLocation]);

          case 13:
            _yield$db$query27 = _context10.sent;
            _yield$db$query28 = (0, _slicedToArray2["default"])(_yield$db$query27, 1);
            rows = _yield$db$query28[0];
            res.json({
              insertId: rows.insertId,
              value: 1
            });
            _context10.next = 20;
            break;

          case 19:
            res.json({
              value: 0
            });

          case 20:
            db.end();
            _context10.next = 26;
            break;

          case 23:
            _context10.prev = 23;
            _context10.t0 = _context10["catch"](0);
            console.log(_context10.t0);

          case 26:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[0, 23]]);
  }));

  return function AsingProductSupplie(_x21, _x22) {
    return _ref10.apply(this, arguments);
  };
}(); //11.-Editar Domicilio


exports.AsingProductSupplie = AsingProductSupplie;

var EditAdress = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    var db, _yield$db$query29, _yield$db$query30, rows;

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
            return db.query("UPDATE adresssupplie  INNER JOIN supplie ON FkSupplieAd = idSupplie SET adressPrincipal = ?, adressDescription = ?, aComments=?, sDateUpdate=? WHERE idAdress= ?;", [req.body.adressPrincipal, req.body.adressDescription, req.body.aComments, date(), req.body.idAdress]);

          case 6:
            _yield$db$query29 = _context11.sent;
            _yield$db$query30 = (0, _slicedToArray2["default"])(_yield$db$query29, 1);
            rows = _yield$db$query30[0];

            if (rows.affectedRows > 0) {
              res.send("La actualizacion fue realizada correctamente");
            } else {
              res.send("No se realizo la actualizacion");
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

  return function EditAdress(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}(); //12.-Editar Contacto


exports.EditAdress = EditAdress;

var EditContact = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res) {
    var db, _yield$db$query31, _yield$db$query32, rows;

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
            return db.query("UPDATE contactsupplies INNER JOIN adresssupplie INNER JOIN supplie ON FkAdressCont = idAdress AND FkSupplieAd = idSupplie SET contactPrincipal =?, workposition =?, officeNumber=?, cellphoneNumber=?, comments=?, sDateUpdate=? WHERE idContact=?;", [req.body.contactPrincipal, req.body.workposition, req.body.officeNumber, req.body.cellphoneNumber, req.body.comments, date(), req.body.idContact]);

          case 6:
            _yield$db$query31 = _context12.sent;
            _yield$db$query32 = (0, _slicedToArray2["default"])(_yield$db$query31, 1);
            rows = _yield$db$query32[0];

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

  return function EditContact(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}(); //13.-Editar Proveedor


exports.EditContact = EditContact;

var EditSupplie = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req, res) {
    var db, _yield$db$query33, _yield$db$query34, rows;

    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            _context13.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context13.sent;
            _context13.next = 6;
            return db.query("UPDATE supplie SET nameSupplie =?, FKBusinessType =?, FkClasification=?,sDateUpdate =?WHERE idSupplie =?;", [req.body.nameSupplie, req.body.FKBusinessType, req.body.FkClasification, date(), req.body.idSupplie]);

          case 6:
            _yield$db$query33 = _context13.sent;
            _yield$db$query34 = (0, _slicedToArray2["default"])(_yield$db$query33, 1);
            rows = _yield$db$query34[0];

            if (rows.affectedRows > 0) {
              res.send("La actualizacion fue realizada correctamente");
            } else {
              res.send("No se realizo la actualizacion");
            }

            db.end();
            _context13.next = 16;
            break;

          case 13:
            _context13.prev = 13;
            _context13.t0 = _context13["catch"](0);
            console.log(_context13.t0);

          case 16:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[0, 13]]);
  }));

  return function EditSupplie(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}(); //14.-Editar Relacion Proveedor Producto


exports.EditSupplie = EditSupplie;

var EditSupply = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(req, res) {
    var db, _yield$db$query35, _yield$db$query36, rows;

    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            _context14.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context14.sent;
            _context14.next = 6;
            return db.query("UPDATE supply SET price = ?, divisa = ?,deliveryTime =?,productLine =?, comments =?,pDateUpdate =?,pSampleF=?,pSampleLocation=? WHERE idSupply=?;", [req.body.price, req.body.divisa, req.body.deliveryTime, req.body.productLine, req.body.comments, date(), req.body.pSampleF, req.body.pSampleLocation, req.body.idSupply]);

          case 6:
            _yield$db$query35 = _context14.sent;
            _yield$db$query36 = (0, _slicedToArray2["default"])(_yield$db$query35, 1);
            rows = _yield$db$query36[0];

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
            _context14.next = 16;
            break;

          case 13:
            _context14.prev = 13;
            _context14.t0 = _context14["catch"](0);
            console.log(_context14.t0);

          case 16:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[0, 13]]);
  }));

  return function EditSupply(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();
/*15.-Eliminar Contacto de acuerdo a su Id contact*/


exports.EditSupply = EditSupply;

var deleteContact = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(req, res) {
    var db, _yield$db$query37, _yield$db$query38, rows;

    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.prev = 0;
            _context15.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context15.sent;
            _context15.next = 6;
            return db.query("DELETE FROM contactsupplies WHERE idContact=?;", [req.params.id]);

          case 6:
            _yield$db$query37 = _context15.sent;
            _yield$db$query38 = (0, _slicedToArray2["default"])(_yield$db$query37, 1);
            rows = _yield$db$query38[0];

            if (rows.affectedRows > 0) {
              res.send("Contacto eliminado con exito");
            } else {
              res.send("No se puede eliminar el contacto");
            }

            db.end();
            _context15.next = 16;
            break;

          case 13:
            _context15.prev = 13;
            _context15.t0 = _context15["catch"](0);
            console.log(_context15.t0);

          case 16:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[0, 13]]);
  }));

  return function deleteContact(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();
/*16.-Eliminar Domicilio de acuerdo con su Id de domicilio
 */


exports.deleteContact = deleteContact;

var deleteAdress = /*#__PURE__*/function () {
  var _ref17 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(req, res) {
    var db, _yield$db$query39, _yield$db$query40, rows;

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
            return db.query("DELETE FROM adresssupplie WHERE idAdress=?;", [req.params.id]);

          case 6:
            _yield$db$query39 = _context16.sent;
            _yield$db$query40 = (0, _slicedToArray2["default"])(_yield$db$query39, 1);
            rows = _yield$db$query40[0];

            if (rows.affectedRows > 0) {
              res.send("Domicilio eliminado con exito");
            } else {
              res.send("No se puede eliminar el contacto");
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

  return function deleteAdress(_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}();
/*17.-Eliminar Producto asignado al proveedor
 */


exports.deleteAdress = deleteAdress;

var deleteSupply = /*#__PURE__*/function () {
  var _ref18 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(req, res) {
    var db, _yield$db$query41, _yield$db$query42, rows;

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
            return db.query("DELETE FROM supply WHERE idSupply=?;", [req.params.id]);

          case 6:
            _yield$db$query41 = _context17.sent;
            _yield$db$query42 = (0, _slicedToArray2["default"])(_yield$db$query41, 1);
            rows = _yield$db$query42[0];

            if (rows.affectedRows > 0) {
              res.send("Producto eliminado con exito del proveedor");
            } else {
              res.send("No se pudo eliminar el producto del proveedor");
            }

            db.end();
            _context17.next = 16;
            break;

          case 13:
            _context17.prev = 13;
            _context17.t0 = _context17["catch"](0);
            console.log(_context17.t0);

          case 16:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17, null, [[0, 13]]);
  }));

  return function deleteSupply(_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}(); //18.-Eliminar Proveedor, eliminar por completo todos los datos relacionados con el proveedor, domicilios, contactos, productos que tenga asignados.


exports.deleteSupply = deleteSupply;

var deleteSupplie = /*#__PURE__*/function () {
  var _ref19 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(req, res) {
    var db, _yield$db$query43, _yield$db$query44, rows;

    return _regenerator["default"].wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _context18.prev = 0;
            _context18.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context18.sent;
            _context18.next = 6;
            return db.query("DELETE FROM supplie WHERE idSupplie=?;", [req.params.id]);

          case 6:
            _yield$db$query43 = _context18.sent;
            _yield$db$query44 = (0, _slicedToArray2["default"])(_yield$db$query43, 1);
            rows = _yield$db$query44[0];

            if (rows.affectedRows > 0) {
              res.send("Proveedor Eliminado con Exito");
            } else {
              res.send("No se pudo eliminar el proveedor");
            }

            db.end();
            _context18.next = 16;
            break;

          case 13:
            _context18.prev = 13;
            _context18.t0 = _context18["catch"](0);
            console.log(_context18.t0);

          case 16:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18, null, [[0, 13]]);
  }));

  return function deleteSupplie(_x37, _x38) {
    return _ref19.apply(this, arguments);
  };
}(); //Metodos de Productos
// 1.- Listar productos con tecnologia, despripcion y nombre


exports.deleteSupplie = deleteSupplie;

var productlist = /*#__PURE__*/function () {
  var _ref20 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(req, res) {
    var db, _yield$db$query45, _yield$db$query46, rows;

    return _regenerator["default"].wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _context19.prev = 0;
            _context19.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context19.sent;
            _context19.next = 6;
            return db.query("SELECT idProduct,productName,descriptionProduct,nameTechnology FROM products INNER JOIN technologies ON FkTechnologyPro= idTechnology;");

          case 6:
            _yield$db$query45 = _context19.sent;
            _yield$db$query46 = (0, _slicedToArray2["default"])(_yield$db$query45, 1);
            rows = _yield$db$query46[0];

            if (!rows.length) {
              res.json([]);
            } else {
              res.json(rows);
            }

            db.end();
            _context19.next = 16;
            break;

          case 13:
            _context19.prev = 13;
            _context19.t0 = _context19["catch"](0);
            console.log(_context19.t0);

          case 16:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19, null, [[0, 13]]);
  }));

  return function productlist(_x39, _x40) {
    return _ref20.apply(this, arguments);
  };
}(); // 2.-Devolver producto por id


exports.productlist = productlist;

var productId = /*#__PURE__*/function () {
  var _ref21 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(req, res) {
    var db, _yield$db$query47, _yield$db$query48, rows;

    return _regenerator["default"].wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            _context20.prev = 0;
            _context20.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context20.sent;
            _context20.next = 6;
            return db.query("SELECT * FROM products INNER JOIN technologies ON FkTechnologyPro= idTechnology WHERE idProduct=?;", [req.params.id]);

          case 6:
            _yield$db$query47 = _context20.sent;
            _yield$db$query48 = (0, _slicedToArray2["default"])(_yield$db$query47, 1);
            rows = _yield$db$query48[0];

            if (!rows.length) {
              res.json([]);
            } else {
              res.json(rows);
            }

            db.end();
            _context20.next = 16;
            break;

          case 13:
            _context20.prev = 13;
            _context20.t0 = _context20["catch"](0);
            console.log(_context20.t0);

          case 16:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20, null, [[0, 13]]);
  }));

  return function productId(_x41, _x42) {
    return _ref21.apply(this, arguments);
  };
}(); //3.- Devolver todos los proveedores que tienen en venta 1 producto


exports.productId = productId;

var productSupplies = /*#__PURE__*/function () {
  var _ref22 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21(req, res) {
    var db, _yield$db$query49, _yield$db$query50, rows;

    return _regenerator["default"].wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            _context21.prev = 0;
            _context21.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context21.sent;
            _context21.next = 6;
            return db.query("SELECT * FROM supply  INNER JOIN supplie ON FkSupplieSpy = idSupplie WHERE FkProductSpy=? ORDER BY pDateUpdate;", [req.params.id]);

          case 6:
            _yield$db$query49 = _context21.sent;
            _yield$db$query50 = (0, _slicedToArray2["default"])(_yield$db$query49, 1);
            rows = _yield$db$query50[0];

            if (!rows.length) {
              res.json([]);
            } else {
              res.json(rows);
            }

            db.end();
            _context21.next = 16;
            break;

          case 13:
            _context21.prev = 13;
            _context21.t0 = _context21["catch"](0);
            console.log(_context21.t0);

          case 16:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21, null, [[0, 13]]);
  }));

  return function productSupplies(_x43, _x44) {
    return _ref22.apply(this, arguments);
  };
}(); // 2.-Agregar Producto


exports.productSupplies = productSupplies;

var addProduct = /*#__PURE__*/function () {
  var _ref23 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22(req, res) {
    var db, _yield$db$query51, _yield$db$query52, rows;

    return _regenerator["default"].wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            _context22.prev = 0;
            _context22.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context22.sent;
            _context22.next = 6;
            return db.query("INSERT INTO products (FkTechnologyPro, productName, descriptionProduct) VALUES (?, ?, ?);", [req.body.FkTechnologyPro, req.body.productName, req.body.descriptionProduct]);

          case 6:
            _yield$db$query51 = _context22.sent;
            _yield$db$query52 = (0, _slicedToArray2["default"])(_yield$db$query51, 1);
            rows = _yield$db$query52[0];
            res.json({
              insertId: rows.insertId,
              value: 1
            });
            db.end();
            _context22.next = 16;
            break;

          case 13:
            _context22.prev = 13;
            _context22.t0 = _context22["catch"](0);
            console.log(_context22.t0);

          case 16:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22, null, [[0, 13]]);
  }));

  return function addProduct(_x45, _x46) {
    return _ref23.apply(this, arguments);
  };
}(); //2.-Editar Producto


exports.addProduct = addProduct;

var editProduct = /*#__PURE__*/function () {
  var _ref24 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23(req, res) {
    var db, _yield$db$query53, _yield$db$query54, rows;

    return _regenerator["default"].wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            _context23.prev = 0;
            _context23.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context23.sent;
            _context23.next = 6;
            return db.query("UPDATE products SET FkTechnologyPro = ?, productName=?, descriptionProduct=? WHERE idProduct=?;", [req.body.FkTechnologyPro, req.body.productName, req.body.descriptionProduct, req.body.idProduct]);

          case 6:
            _yield$db$query53 = _context23.sent;
            _yield$db$query54 = (0, _slicedToArray2["default"])(_yield$db$query53, 1);
            rows = _yield$db$query54[0];

            if (rows.affectedRows > 0) {
              res.send("La actualizacion fue realizada correctamente");
            } else {
              res.send("No se realizo la actualizacion");
            }

            db.end();
            _context23.next = 16;
            break;

          case 13:
            _context23.prev = 13;
            _context23.t0 = _context23["catch"](0);
            console.log(_context23.t0);

          case 16:
          case "end":
            return _context23.stop();
        }
      }
    }, _callee23, null, [[0, 13]]);
  }));

  return function editProduct(_x47, _x48) {
    return _ref24.apply(this, arguments);
  };
}(); //3.- Eliminar Producto


exports.editProduct = editProduct;

var deleteProduct = /*#__PURE__*/function () {
  var _ref25 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24(req, res) {
    var db, _yield$db$query55, _yield$db$query56, rows;

    return _regenerator["default"].wrap(function _callee24$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            _context24.prev = 0;
            _context24.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context24.sent;
            _context24.next = 6;
            return db.query("DELETE FROM products WHERE idProduct=?;", [req.params.id]);

          case 6:
            _yield$db$query55 = _context24.sent;
            _yield$db$query56 = (0, _slicedToArray2["default"])(_yield$db$query55, 1);
            rows = _yield$db$query56[0];

            if (rows.affectedRows > 0) {
              res.send("Producto Eliminado con Exito");
            } else {
              res.send("No se pudo eliminar el producto");
            }

            db.end();
            _context24.next = 16;
            break;

          case 13:
            _context24.prev = 13;
            _context24.t0 = _context24["catch"](0);
            console.log(_context24.t0);

          case 16:
          case "end":
            return _context24.stop();
        }
      }
    }, _callee24, null, [[0, 13]]);
  }));

  return function deleteProduct(_x49, _x50) {
    return _ref25.apply(this, arguments);
  };
}(); // Metodo que devuelve la relacion de un proveedor con un producto, pidiendo el Id de la relacion


exports.deleteProduct = deleteProduct;

var GetSupply = /*#__PURE__*/function () {
  var _ref26 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee25(req, res) {
    var db, _yield$db$query57, _yield$db$query58, rows;

    return _regenerator["default"].wrap(function _callee25$(_context25) {
      while (1) {
        switch (_context25.prev = _context25.next) {
          case 0:
            _context25.prev = 0;
            _context25.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context25.sent;
            _context25.next = 6;
            return db.query("SELECT * FROM supply WHERE idSupply=?;", [req.params.id]);

          case 6:
            _yield$db$query57 = _context25.sent;
            _yield$db$query58 = (0, _slicedToArray2["default"])(_yield$db$query57, 1);
            rows = _yield$db$query58[0];
            rows.length > 0 ? res.json(rows) : res.json({
              value: 0
            });
            db.end();
            _context25.next = 16;
            break;

          case 13:
            _context25.prev = 13;
            _context25.t0 = _context25["catch"](0);
            console.log(_context25.t0);

          case 16:
          case "end":
            return _context25.stop();
        }
      }
    }, _callee25, null, [[0, 13]]);
  }));

  return function GetSupply(_x51, _x52) {
    return _ref26.apply(this, arguments);
  };
}();
/*Metodos Generales de configuracion*/
// Agregar Tipo de Negocio para clasificar


exports.GetSupply = GetSupply;

var addBusinessType = /*#__PURE__*/function () {
  var _ref27 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee26(req, res) {
    var db, _yield$db$query59, _yield$db$query60, rows;

    return _regenerator["default"].wrap(function _callee26$(_context26) {
      while (1) {
        switch (_context26.prev = _context26.next) {
          case 0:
            _context26.prev = 0;
            _context26.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context26.sent;
            _context26.next = 6;
            return db.query("INSERT INTO businesstype (bName, bDescription) VALUES (?,?);", [req.body.bName, req.body.bDescription]);

          case 6:
            _yield$db$query59 = _context26.sent;
            _yield$db$query60 = (0, _slicedToArray2["default"])(_yield$db$query59, 1);
            rows = _yield$db$query60[0];
            res.json({
              value: 1
            });
            db.end();
            _context26.next = 16;
            break;

          case 13:
            _context26.prev = 13;
            _context26.t0 = _context26["catch"](0);
            console.log(_context26.t0);

          case 16:
          case "end":
            return _context26.stop();
        }
      }
    }, _callee26, null, [[0, 13]]);
  }));

  return function addBusinessType(_x53, _x54) {
    return _ref27.apply(this, arguments);
  };
}(); // Metodo para actualizar tipo de negocio


exports.addBusinessType = addBusinessType;

var updateBusinessType = /*#__PURE__*/function () {
  var _ref28 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee27(req, res) {
    var db, _yield$db$query61, _yield$db$query62, rows;

    return _regenerator["default"].wrap(function _callee27$(_context27) {
      while (1) {
        switch (_context27.prev = _context27.next) {
          case 0:
            _context27.prev = 0;
            _context27.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context27.sent;
            _context27.next = 6;
            return db.query("UPDATE businesstype SET bName = ?, bDescription=? WHERE idBusinessType =?;", [req.body.bName, req.body.bDescription, req.body.idBusinessType]);

          case 6:
            _yield$db$query61 = _context27.sent;
            _yield$db$query62 = (0, _slicedToArray2["default"])(_yield$db$query61, 1);
            rows = _yield$db$query62[0];

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
            _context27.next = 16;
            break;

          case 13:
            _context27.prev = 13;
            _context27.t0 = _context27["catch"](0);
            console.log(_context27.t0);

          case 16:
          case "end":
            return _context27.stop();
        }
      }
    }, _callee27, null, [[0, 13]]);
  }));

  return function updateBusinessType(_x55, _x56) {
    return _ref28.apply(this, arguments);
  };
}(); // Metodo para agregar Clasificacion de Productos


exports.updateBusinessType = updateBusinessType;

var addTechnology = /*#__PURE__*/function () {
  var _ref29 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee28(req, res) {
    var db, _yield$db$query63, _yield$db$query64, rows;

    return _regenerator["default"].wrap(function _callee28$(_context28) {
      while (1) {
        switch (_context28.prev = _context28.next) {
          case 0:
            _context28.prev = 0;
            _context28.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context28.sent;
            _context28.next = 6;
            return db.query("INSERT INTO technologies (nameTechnology) VALUES (?);", [req.body.nameTechnology]);

          case 6:
            _yield$db$query63 = _context28.sent;
            _yield$db$query64 = (0, _slicedToArray2["default"])(_yield$db$query63, 1);
            rows = _yield$db$query64[0];
            res.json({
              value: 1
            });
            db.end();
            _context28.next = 16;
            break;

          case 13:
            _context28.prev = 13;
            _context28.t0 = _context28["catch"](0);
            console.log(_context28.t0);

          case 16:
          case "end":
            return _context28.stop();
        }
      }
    }, _callee28, null, [[0, 13]]);
  }));

  return function addTechnology(_x57, _x58) {
    return _ref29.apply(this, arguments);
  };
}(); //Metodo para actualizar Tecnologia de Productos


exports.addTechnology = addTechnology;

var UpdateTechnology = /*#__PURE__*/function () {
  var _ref30 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee29(req, res) {
    var db, _yield$db$query65, _yield$db$query66, rows;

    return _regenerator["default"].wrap(function _callee29$(_context29) {
      while (1) {
        switch (_context29.prev = _context29.next) {
          case 0:
            _context29.prev = 0;
            _context29.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context29.sent;
            _context29.next = 6;
            return db.query("UPDATE technologies SET nameTechnology = ? WHERE idTechnology = ?;", [req.body.nameTechnology, req.body.idTechnology]);

          case 6:
            _yield$db$query65 = _context29.sent;
            _yield$db$query66 = (0, _slicedToArray2["default"])(_yield$db$query65, 1);
            rows = _yield$db$query66[0];

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
            _context29.next = 16;
            break;

          case 13:
            _context29.prev = 13;
            _context29.t0 = _context29["catch"](0);
            console.log(_context29.t0);

          case 16:
          case "end":
            return _context29.stop();
        }
      }
    }, _callee29, null, [[0, 13]]);
  }));

  return function UpdateTechnology(_x59, _x60) {
    return _ref30.apply(this, arguments);
  };
}(); // Metodo para agregar Clasificacion de Proveedores


exports.UpdateTechnology = UpdateTechnology;

var addsClasification = /*#__PURE__*/function () {
  var _ref31 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee30(req, res) {
    var db, _yield$db$query67, _yield$db$query68, rows;

    return _regenerator["default"].wrap(function _callee30$(_context30) {
      while (1) {
        switch (_context30.prev = _context30.next) {
          case 0:
            _context30.prev = 0;
            _context30.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context30.sent;
            _context30.next = 6;
            return db.query("INSERT INTO sclasification (clasificationName) VALUES (?);", [req.body.clasificationName]);

          case 6:
            _yield$db$query67 = _context30.sent;
            _yield$db$query68 = (0, _slicedToArray2["default"])(_yield$db$query67, 1);
            rows = _yield$db$query68[0];
            res.json({
              value: 1
            });
            db.end();
            _context30.next = 16;
            break;

          case 13:
            _context30.prev = 13;
            _context30.t0 = _context30["catch"](0);
            console.log(_context30.t0);

          case 16:
          case "end":
            return _context30.stop();
        }
      }
    }, _callee30, null, [[0, 13]]);
  }));

  return function addsClasification(_x61, _x62) {
    return _ref31.apply(this, arguments);
  };
}();

exports.addsClasification = addsClasification;

var UpdatesClasification = /*#__PURE__*/function () {
  var _ref32 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee31(req, res) {
    var db, _yield$db$query69, _yield$db$query70, rows;

    return _regenerator["default"].wrap(function _callee31$(_context31) {
      while (1) {
        switch (_context31.prev = _context31.next) {
          case 0:
            _context31.prev = 0;
            _context31.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context31.sent;
            _context31.next = 6;
            return db.query("UPDATE sclasification SET clasificationName = ? WHERE idClasification = ?;", [req.body.clasificationName, req.body.idClasification]);

          case 6:
            _yield$db$query69 = _context31.sent;
            _yield$db$query70 = (0, _slicedToArray2["default"])(_yield$db$query69, 1);
            rows = _yield$db$query70[0];

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
            _context31.next = 16;
            break;

          case 13:
            _context31.prev = 13;
            _context31.t0 = _context31["catch"](0);
            console.log(_context31.t0);

          case 16:
          case "end":
            return _context31.stop();
        }
      }
    }, _callee31, null, [[0, 13]]);
  }));

  return function UpdatesClasification(_x63, _x64) {
    return _ref32.apply(this, arguments);
  };
}(); //Metodo para agregar Tipos de Domicilio


exports.UpdatesClasification = UpdatesClasification;

var addaType = /*#__PURE__*/function () {
  var _ref33 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee32(req, res) {
    var db, _yield$db$query71, _yield$db$query72, rows;

    return _regenerator["default"].wrap(function _callee32$(_context32) {
      while (1) {
        switch (_context32.prev = _context32.next) {
          case 0:
            _context32.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context32.sent;
            _context32.prev = 3;
            _context32.next = 6;
            return db.query("INSERT INTO adresstype (aType) VALUES (?);", [req.body.aType]);

          case 6:
            _yield$db$query71 = _context32.sent;
            _yield$db$query72 = (0, _slicedToArray2["default"])(_yield$db$query71, 1);
            rows = _yield$db$query72[0];
            res.json({
              value: 1
            });
            _context32.next = 15;
            break;

          case 12:
            _context32.prev = 12;
            _context32.t0 = _context32["catch"](3);
            console.log(_context32.t0);

          case 15:
            db.end();

          case 16:
          case "end":
            return _context32.stop();
        }
      }
    }, _callee32, null, [[3, 12]]);
  }));

  return function addaType(_x65, _x66) {
    return _ref33.apply(this, arguments);
  };
}(); // Metodo para Actualizar Tipos de Domicilio


exports.addaType = addaType;

var updateAddType = /*#__PURE__*/function () {
  var _ref34 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee33(req, res) {
    var db, _yield$db$query73, _yield$db$query74, rows;

    return _regenerator["default"].wrap(function _callee33$(_context33) {
      while (1) {
        switch (_context33.prev = _context33.next) {
          case 0:
            _context33.prev = 0;
            _context33.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context33.sent;
            _context33.next = 6;
            return db.query("UPDATE adresstype SET aType = ? WHERE idadressType = ?;", [req.body.aType, req.body.idadressType]);

          case 6:
            _yield$db$query73 = _context33.sent;
            _yield$db$query74 = (0, _slicedToArray2["default"])(_yield$db$query73, 1);
            rows = _yield$db$query74[0];

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
            _context33.next = 16;
            break;

          case 13:
            _context33.prev = 13;
            _context33.t0 = _context33["catch"](0);
            console.log(_context33.t0);

          case 16:
          case "end":
            return _context33.stop();
        }
      }
    }, _callee33, null, [[0, 13]]);
  }));

  return function updateAddType(_x67, _x68) {
    return _ref34.apply(this, arguments);
  };
}(); // Metodo para listar las tenologias del producto


exports.updateAddType = updateAddType;

var listTech = /*#__PURE__*/function () {
  var _ref35 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee34(req, res) {
    var db, _yield$db$query75, _yield$db$query76, rows;

    return _regenerator["default"].wrap(function _callee34$(_context34) {
      while (1) {
        switch (_context34.prev = _context34.next) {
          case 0:
            _context34.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context34.sent;
            _context34.next = 5;
            return db.query("SELECT * FROM technologies;");

          case 5:
            _yield$db$query75 = _context34.sent;
            _yield$db$query76 = (0, _slicedToArray2["default"])(_yield$db$query75, 1);
            rows = _yield$db$query76[0];

            if (!rows) {
              res.json([]);
            } else {
              res.json(rows);
            }

            db.end();

          case 10:
          case "end":
            return _context34.stop();
        }
      }
    }, _callee34);
  }));

  return function listTech(_x69, _x70) {
    return _ref35.apply(this, arguments);
  };
}(); //Metodo para listar los tipos de domicilio


exports.listTech = listTech;

var listAType = /*#__PURE__*/function () {
  var _ref36 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee35(req, res) {
    var db, _yield$db$query77, _yield$db$query78, rows;

    return _regenerator["default"].wrap(function _callee35$(_context35) {
      while (1) {
        switch (_context35.prev = _context35.next) {
          case 0:
            _context35.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context35.sent;
            _context35.next = 5;
            return db.query("SELECT * FROM adresstype;");

          case 5:
            _yield$db$query77 = _context35.sent;
            _yield$db$query78 = (0, _slicedToArray2["default"])(_yield$db$query77, 1);
            rows = _yield$db$query78[0];

            if (!rows) {
              res.json([]);
            } else {
              res.json(rows);
            }

            db.end();

          case 10:
          case "end":
            return _context35.stop();
        }
      }
    }, _callee35);
  }));

  return function listAType(_x71, _x72) {
    return _ref36.apply(this, arguments);
  };
}(); //Metodo para listar los tipos de negocio


exports.listAType = listAType;

var listBusiness = /*#__PURE__*/function () {
  var _ref37 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee36(req, res) {
    var db, _yield$db$query79, _yield$db$query80, rows;

    return _regenerator["default"].wrap(function _callee36$(_context36) {
      while (1) {
        switch (_context36.prev = _context36.next) {
          case 0:
            _context36.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context36.sent;
            _context36.next = 5;
            return db.query("SELECT * FROM businesstype;");

          case 5:
            _yield$db$query79 = _context36.sent;
            _yield$db$query80 = (0, _slicedToArray2["default"])(_yield$db$query79, 1);
            rows = _yield$db$query80[0];

            if (!rows) {
              res.json([]);
            } else {
              res.json(rows);
            }

            db.end();

          case 10:
          case "end":
            return _context36.stop();
        }
      }
    }, _callee36);
  }));

  return function listBusiness(_x73, _x74) {
    return _ref37.apply(this, arguments);
  };
}(); // Metodo para listar la clasificacion de proveddores


exports.listBusiness = listBusiness;

var listSClasificacion = /*#__PURE__*/function () {
  var _ref38 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee37(req, res) {
    var db, _yield$db$query81, _yield$db$query82, rows;

    return _regenerator["default"].wrap(function _callee37$(_context37) {
      while (1) {
        switch (_context37.prev = _context37.next) {
          case 0:
            _context37.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context37.sent;
            _context37.next = 5;
            return db.query("SELECT * FROM sclasification;");

          case 5:
            _yield$db$query81 = _context37.sent;
            _yield$db$query82 = (0, _slicedToArray2["default"])(_yield$db$query81, 1);
            rows = _yield$db$query82[0];

            if (!rows) {
              res.json([]);
            } else {
              res.json(rows);
            }

            db.end();

          case 10:
          case "end":
            return _context37.stop();
        }
      }
    }, _callee37);
  }));

  return function listSClasificacion(_x75, _x76) {
    return _ref38.apply(this, arguments);
  };
}(); // Para guardar fechas convertir a año, mes + 1 y dia con funciones getfullyear(), getmounth(), getdate(),


exports.listSClasificacion = listSClasificacion;