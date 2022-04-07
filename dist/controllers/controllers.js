"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supplielist = exports.supplieProducts = exports.supplieFullAdress = exports.supplieContacts = exports.supplieById = exports.editProduct = exports.deleteSupply = exports.deleteSupplie = exports.deleteProduct = exports.deleteContact = exports.deleteAdress = exports.adressContact = exports.addsClasification = exports.addaType = exports.addTechnology = exports.addSupplie = exports.addProduct = exports.addContact = exports.addBusinessType = exports.addAdress = exports.EditSupply = exports.EditSupplie = exports.EditContact = exports.EditAdress = exports.AsingProductSupplie = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database/database");

/* Metodos de los Proveedores*/
// 1.- Listar proveedores con el tipo de negocio y el tipo de proveedor que son
var supplielist = /*#__PURE__*/function () {
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
            _context.next = 5;
            return db.query("SELECT * FROM supplie t1 JOIN businesstype t2 JOIN sclasification t3 ON t1.FkBusinessType=t2.idBusinessType AND t1.FkClasification=t3.idClasification ORDER BY sDateUpdate DESC;");

          case 5:
            _yield$db$query = _context.sent;
            _yield$db$query2 = (0, _slicedToArray2["default"])(_yield$db$query, 1);
            rows = _yield$db$query2[0];

            if (!rows) {
              res.send("No hay proveedores Registrados");
            } else {
              res.json(rows);
            }

            db.end();

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function supplielist(_x, _x2) {
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
            _context2.next = 5;
            return db.query("SELECT * FROM supplie t1 JOIN businesstype t2 JOIN sclasification t3 ON t1.FkBusinessType = t2.idBusinessType AND t1.FkClasification = t3.idClasification WHERE t1.idSupplie= ?;", [req.params.id]);

          case 5:
            _yield$db$query3 = _context2.sent;
            _yield$db$query4 = (0, _slicedToArray2["default"])(_yield$db$query3, 1);
            rows = _yield$db$query4[0];
            if (!rows.length) res.send("No existe el proveedor con ese ID");else res.json(rows);
            db.end();

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function supplieById(_x3, _x4) {
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
            _context3.next = 5;
            return db.query("SELECT * FROM adresssupplie t1 JOIN adresstype t2 ON t1.FkadressType = t2.idadressType WHERE t1.FkSupplieAd =?;", [req.params.id]);

          case 5:
            _yield$db$query5 = _context3.sent;
            _yield$db$query6 = (0, _slicedToArray2["default"])(_yield$db$query5, 1);
            rows = _yield$db$query6[0];

            if (!rows.length) {
              res.send("El proveedor no cuenta con domicilios registrados registrar uno");
            } else {
              res.json(rows);
            }

            db.end();

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function supplieFullAdress(_x5, _x6) {
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
            _context4.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context4.sent;
            _context4.next = 5;
            return db.query("SELECT * FROM adresssupplie t1 JOIN adresstype t2 JOIN contactsupplies t3 ON t1.FkadressType = t2.idadressType AND t1.idAdress = t3.FkAdressCont WHERE t1.idAdress = ? ORDER BY t3.contactPrincipal DESC;", [req.params.id]);

          case 5:
            _yield$db$query7 = _context4.sent;
            _yield$db$query8 = (0, _slicedToArray2["default"])(_yield$db$query7, 1);
            rows = _yield$db$query8[0];

            if (!rows.length) {
              res.send("El Domicilio no cuenta con contactos registrados registrar uno");
            } else {
              res.json(rows);
            }

            db.end();

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function adressContact(_x7, _x8) {
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
            _context5.next = 5;
            return db.query("SELECT * FROM supplie t1 JOIN adresssupplie t2 JOIN adresstype t3 JOIN contactsupplies t4 ON t1.idSupplie = t2.FkSupplieAd AND t2.FkadressType = t3.idadressType AND t2.idAdress = t4.FkAdressCont WHERE idSupplie =? ORDER BY t4.contactPrincipal DESC;", [req.params.id]);

          case 5:
            _yield$db$query9 = _context5.sent;
            _yield$db$query10 = (0, _slicedToArray2["default"])(_yield$db$query9, 1);
            rows = _yield$db$query10[0];

            if (!rows.length) {
              res.send("El Proveedor no cuenta con contactos registrados registrar uno");
            } else {
              res.json(rows);
            }

            db.end();

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function supplieContacts(_x9, _x10) {
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
            _context6.next = 5;
            return db.query("SELECT * FROM supply t1 JOIN products t2 JOIN technologies t3 ON t1.FkProductSpy = t2.idProduct AND t2.FkTechnologyPro = t3.idTechnology WHERE t1.FkSupplieSpy=?;", [req.params.id]);

          case 5:
            _yield$db$query11 = _context6.sent;
            _yield$db$query12 = (0, _slicedToArray2["default"])(_yield$db$query11, 1);
            rows = _yield$db$query12[0];

            if (!rows.length) {
              res.send("El proveedor no tiene productos Asignados");
            } else {
              res.json(rows);
            }

            db.end();

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function supplieProducts(_x11, _x12) {
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
            _context7.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context7.sent;
            _context7.prev = 3;
            _context7.next = 6;
            return db.query("INSERT INTO supplie (nameSupplie, FkBusinessType, FkClasification, sDateInitial, sDateUpdate) VALUES (?, ?, ?, ?, ?); ", [req.body.nameSupplie, req.body.FkBusinessType, req.body.FkClasification, req.body.sDateInitial, req.body.sDateUpdate]);

          case 6:
            _yield$db$query13 = _context7.sent;
            _yield$db$query14 = (0, _slicedToArray2["default"])(_yield$db$query13, 1);
            rows = _yield$db$query14[0];
            res.json(rows.insertId);
            _context7.next = 15;
            break;

          case 12:
            _context7.prev = 12;
            _context7.t0 = _context7["catch"](3);
            res.json("El Nombre del Proveedor ya se encuentra registrado");

          case 15:
            db.end();

          case 16:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[3, 12]]);
  }));

  return function addSupplie(_x13, _x14) {
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
            _context8.next = 6;
            return db.query("SELECT * FROM adresssupplie WHERE FkSupplieAd=? AND adressPrincipal=1;", [req.body.FkSupplieAd]);

          case 6:
            _yield$db$query15 = _context8.sent;
            _yield$db$query16 = (0, _slicedToArray2["default"])(_yield$db$query15, 1);
            principal = _yield$db$query16[0];

            if (!principal.length) {
              principalAdress = 1;
            } else {
              principalAdress = 0;
            }

            _context8.next = 12;
            return db.query("INSERT INTO adresssupplie (FkSupplieAd, FkadressType, adressPrincipal, adressCountry, adressState, adressDescription, aComments) VALUES (?,?,?,?,?,?,?);", [req.body.FkSupplieAd, req.body.FkadressType, principalAdress, req.body.adressCountry, req.body.adressState, req.body.adressDescription, req.body.aComments]);

          case 12:
            _yield$db$query17 = _context8.sent;
            _yield$db$query18 = (0, _slicedToArray2["default"])(_yield$db$query17, 1);
            rows = _yield$db$query18[0];
            res.json(rows.insertId);
            db.end();

          case 17:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function addAdress(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}(); //9.-Agregar Contacto a Domicilio de Proveedor


exports.addAdress = addAdress;

var addContact = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var db, principalContact, _yield$db$query19, _yield$db$query20, principal, _yield$db$query21, _yield$db$query22, rows;

    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context9.sent;
            principalContact = 0;
            _context9.next = 6;
            return db.query("SELECT * FROM contactsupplies WHERE FkAdressCont = ? AND contactPrincipal=1;", [req.body.FkAdressCont]);

          case 6:
            _yield$db$query19 = _context9.sent;
            _yield$db$query20 = (0, _slicedToArray2["default"])(_yield$db$query19, 1);
            principal = _yield$db$query20[0];

            if (!principal.length) {
              principalContact = 1;
            } else {
              principalContact = 0;
            }

            _context9.next = 12;
            return db.query("INSERT INTO contactsupplies (FkAdressCont, nameContact, contactPrincipal, workposition, officeNumber, cellphoneNumber, comments) VALUES (?,?,?,?,?,?,?);", [req.body.FkAdressCont, req.body.nameContact, principalContact, req.body.workposition, req.body.officeNumber, req.body.cellphoneNumber, req.body.comments]);

          case 12:
            _yield$db$query21 = _context9.sent;
            _yield$db$query22 = (0, _slicedToArray2["default"])(_yield$db$query21, 1);
            rows = _yield$db$query22[0];
            res.json(rows.insertId);
            db.end();

          case 17:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function addContact(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}(); //10.-Asignar Producto a Proveedor: siempre y cuando el producto ya exista


exports.addContact = addContact;

var AsingProductSupplie = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var db, _ref11, rows, _yield$db$query23, _yield$db$query24, Asing, _yield$db$query25, _yield$db$query26;

    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context10.sent;
            _ref11 = [], rows = _ref11[0];
            _context10.next = 6;
            return db.query("SELECT * FROM supply WHERE FkSupplieSpy=? AND FkProductSpy =?;", [req.body.FkSupplieSpy, req.body.FkProductSpy]);

          case 6:
            _yield$db$query23 = _context10.sent;
            _yield$db$query24 = (0, _slicedToArray2["default"])(_yield$db$query23, 1);
            Asing = _yield$db$query24[0];

            if (Asing.length) {
              _context10.next = 18;
              break;
            }

            _context10.next = 12;
            return db.query("INSERT INTO supply (FkSupplieSpy, FkProductSpy, price, deliveryTime, productLine, comments, pDateInitial, pDateUpdate, pSampleF, pSampleLocation) VALUES (?,?,?,?,?,?,?,?,?,?);", [req.body.FkSupplieSpy, req.body.FkProductSpy, req.body.price, req.body.deliveryTime, req.body.productLine, req.body.comments, req.body.pDateInitial, req.body.pDateUpdate, req.body.pSampleF, req.body.pSampleLocation]);

          case 12:
            _yield$db$query25 = _context10.sent;
            _yield$db$query26 = (0, _slicedToArray2["default"])(_yield$db$query25, 1);
            rows = _yield$db$query26[0];
            res.json(rows.insertId);
            _context10.next = 19;
            break;

          case 18:
            res.send("Lo siento este producto ya está asignado al proveedor si quieres modificarlo presiona la opcion editar");

          case 19:
            db.end();

          case 20:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function AsingProductSupplie(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}(); //11.-Editar Domicilio


exports.AsingProductSupplie = AsingProductSupplie;

var EditAdress = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    var db, _yield$db$query27, _yield$db$query28, rows;

    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context11.sent;
            _context11.next = 5;
            return db.query("UPDATE adresssupplie  INNER JOIN supplie ON FkSupplieAd = idSupplie SET adressPrincipal = ?, adressDescription = ?, aComments=?, sDateUpdate=? WHERE idAdress= ?;", [req.body.adressPrincipal, req.body.adressDescription, req.body.aComments, req.body.sDateUpdate, req.body.idAdress]);

          case 5:
            _yield$db$query27 = _context11.sent;
            _yield$db$query28 = (0, _slicedToArray2["default"])(_yield$db$query27, 1);
            rows = _yield$db$query28[0];

            if (rows.affectedRows > 0) {
              res.send("La actualizacion fue realizada correctamente");
            } else {
              res.send("No se realizo la actualizacion");
            }

            db.end();

          case 10:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function EditAdress(_x21, _x22) {
    return _ref12.apply(this, arguments);
  };
}(); //12.-Editar Contacto


exports.EditAdress = EditAdress;

var EditContact = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res) {
    var db, _yield$db$query29, _yield$db$query30, rows;

    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context12.sent;
            _context12.next = 5;
            return db.query("UPDATE contactsupplies INNER JOIN adresssupplie INNER JOIN supplie ON FkAdressCont = idAdress AND FkSupplieAd = idSupplie SET contactPrincipal =?, workposition =?, officeNumber=?, cellphoneNumber=?, comments=?, sDateUpdate=? WHERE idContact=?;", [req.body.contactPrincipal, req.body.workposition, req.body.officeNumber, req.body.cellphoneNumber, req.body.comments, req.body.sDateUpdate, req.body.idContact]);

          case 5:
            _yield$db$query29 = _context12.sent;
            _yield$db$query30 = (0, _slicedToArray2["default"])(_yield$db$query29, 1);
            rows = _yield$db$query30[0];

            if (rows.affectedRows > 0) {
              res.send("La actualizacion fue realizada correctamente");
            } else {
              res.send("No se realizo la actualizacion");
            }

            db.end();

          case 10:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function EditContact(_x23, _x24) {
    return _ref13.apply(this, arguments);
  };
}(); //13.-Editar Proveedor


exports.EditContact = EditContact;

var EditSupplie = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req, res) {
    var db, _yield$db$query31, _yield$db$query32, rows;

    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context13.sent;
            _context13.next = 5;
            return db.query("UPDATE supplie SET nameSupplie =?, FKBusinessType =?, FkClasification=?,sDateUpdate =?WHERE idSupplie =?;", [req.body.nameSupplie, req.body.FKBusinessType, req.body.FkClasification, req.body.sDateUpdate, req.body.idSupplie]);

          case 5:
            _yield$db$query31 = _context13.sent;
            _yield$db$query32 = (0, _slicedToArray2["default"])(_yield$db$query31, 1);
            rows = _yield$db$query32[0];

            if (rows.affectedRows > 0) {
              res.send("La actualizacion fue realizada correctamente");
            } else {
              res.send("No se realizo la actualizacion");
            }

            db.end();

          case 10:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function EditSupplie(_x25, _x26) {
    return _ref14.apply(this, arguments);
  };
}(); //14.-Editar Relacion Proveedor Producto


exports.EditSupplie = EditSupplie;

var EditSupply = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(req, res) {
    var db, _yield$db$query33, _yield$db$query34, rows;

    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context14.sent;
            _context14.next = 5;
            return db.query("UPDATE supply SET price = ?,deliveryTime =?,productLine =?, comments =?,pDateUpdate =?,pSampleF=?,pSampleLocation=? WHERE idSupply=?;", [req.body.price, req.body.deliveryTime, req.body.productLine, req.body.comments, req.body.pDateUpdate, req.body.pSampleF, req.body.pSampleLocation, req.body.idSupply]);

          case 5:
            _yield$db$query33 = _context14.sent;
            _yield$db$query34 = (0, _slicedToArray2["default"])(_yield$db$query33, 1);
            rows = _yield$db$query34[0];

            if (rows.affectedRows > 0) {
              res.send("La actualizacion fue realizada correctamente");
            } else {
              res.send("No se realizo la actualizacion");
            }

            db.end();

          case 10:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));

  return function EditSupply(_x27, _x28) {
    return _ref15.apply(this, arguments);
  };
}();
/*15.-Eliminar Contacto de acuerdo a su Id contact*/


exports.EditSupply = EditSupply;

var deleteContact = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(req, res) {
    var db, _yield$db$query35, _yield$db$query36, rows;

    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context15.sent;
            _context15.next = 5;
            return db.query("DELETE FROM contactsupplies WHERE idContact=?;", [req.params.id]);

          case 5:
            _yield$db$query35 = _context15.sent;
            _yield$db$query36 = (0, _slicedToArray2["default"])(_yield$db$query35, 1);
            rows = _yield$db$query36[0];

            if (rows.affectedRows > 0) {
              res.send("Contacto eliminado con exito");
            } else {
              res.send("No se puede eliminar el contacto");
            }

            db.end();

          case 10:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));

  return function deleteContact(_x29, _x30) {
    return _ref16.apply(this, arguments);
  };
}();
/*16.-Eliminar Domicilio de acuerdo con su Id de domicilio
*/


exports.deleteContact = deleteContact;

var deleteAdress = /*#__PURE__*/function () {
  var _ref17 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(req, res) {
    var db, _yield$db$query37, _yield$db$query38, rows;

    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context16.sent;
            _context16.next = 5;
            return db.query("DELETE FROM adresssupplie WHERE idAdress=?;", [req.params.id]);

          case 5:
            _yield$db$query37 = _context16.sent;
            _yield$db$query38 = (0, _slicedToArray2["default"])(_yield$db$query37, 1);
            rows = _yield$db$query38[0];

            if (rows.affectedRows > 0) {
              res.send("Domicilio eliminado con exito");
            } else {
              res.send("No se puede eliminar el contacto");
            }

            db.end();

          case 10:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));

  return function deleteAdress(_x31, _x32) {
    return _ref17.apply(this, arguments);
  };
}();
/*17.-Eliminar Producto asignado al proveedor
*/


exports.deleteAdress = deleteAdress;

var deleteSupply = /*#__PURE__*/function () {
  var _ref18 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(req, res) {
    var db, _yield$db$query39, _yield$db$query40, rows;

    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context17.sent;
            _context17.next = 5;
            return db.query("DELETE FROM supply WHERE idSupply=?;", [req.params.id]);

          case 5:
            _yield$db$query39 = _context17.sent;
            _yield$db$query40 = (0, _slicedToArray2["default"])(_yield$db$query39, 1);
            rows = _yield$db$query40[0];

            if (rows.affectedRows > 0) {
              res.send("Producto eliminado con exito del proveedor");
            } else {
              res.send("No se pudo eliminar el producto del proveedor");
            }

            db.end();

          case 10:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  }));

  return function deleteSupply(_x33, _x34) {
    return _ref18.apply(this, arguments);
  };
}(); //18.-Eliminar Proveedor, eliminar por completo todos los datos relacionados con el proveedor, domicilios, contactos, productos que tenga asignados.


exports.deleteSupply = deleteSupply;

var deleteSupplie = /*#__PURE__*/function () {
  var _ref19 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(req, res) {
    var db, _yield$db$query41, _yield$db$query42, rows;

    return _regenerator["default"].wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _context18.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context18.sent;
            _context18.next = 5;
            return db.query("DELETE FROM supplie WHERE idSupplie=?;", [req.params.id]);

          case 5:
            _yield$db$query41 = _context18.sent;
            _yield$db$query42 = (0, _slicedToArray2["default"])(_yield$db$query41, 1);
            rows = _yield$db$query42[0];

            if (rows.affectedRows > 0) {
              res.send("Proveedor Eliminado con Exito");
            } else {
              res.send("No se pudo eliminar el proveedor");
            }

            db.end();

          case 10:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  }));

  return function deleteSupplie(_x35, _x36) {
    return _ref19.apply(this, arguments);
  };
}(); //Metodos de Productos
// 1.-Agregar Producto


exports.deleteSupplie = deleteSupplie;

var addProduct = /*#__PURE__*/function () {
  var _ref20 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(req, res) {
    var db, _yield$db$query43, _yield$db$query44, rows;

    return _regenerator["default"].wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _context19.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context19.sent;
            _context19.next = 5;
            return db.query("INSERT INTO products (FkTechnologyPro, productName, descriptionProduct) VALUES (?, ?, ?);", [req.body.FkTechnologyPro, req.body.productName, req.body.descriptionProduct]);

          case 5:
            _yield$db$query43 = _context19.sent;
            _yield$db$query44 = (0, _slicedToArray2["default"])(_yield$db$query43, 1);
            rows = _yield$db$query44[0];
            res.json(rows.insertId);
            db.end();

          case 10:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19);
  }));

  return function addProduct(_x37, _x38) {
    return _ref20.apply(this, arguments);
  };
}(); //2.-Editar Producto


exports.addProduct = addProduct;

var editProduct = /*#__PURE__*/function () {
  var _ref21 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(req, res) {
    var db, _yield$db$query45, _yield$db$query46, rows;

    return _regenerator["default"].wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            _context20.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context20.sent;
            _context20.next = 5;
            return db.query("UPDATE products SET FkTechnologyPro = ?, productName=?, descriptionProduct=? WHERE idProduct=?;", [req.body.FkTechnologyPro, req.body.productName, req.body.descriptionProduct, req.body.idProduct]);

          case 5:
            _yield$db$query45 = _context20.sent;
            _yield$db$query46 = (0, _slicedToArray2["default"])(_yield$db$query45, 1);
            rows = _yield$db$query46[0];

            if (rows.affectedRows > 0) {
              res.send("La actualizacion fue realizada correctamente");
            } else {
              res.send("No se realizo la actualizacion");
            }

            db.end();

          case 10:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20);
  }));

  return function editProduct(_x39, _x40) {
    return _ref21.apply(this, arguments);
  };
}(); //3.- Eliminar Producto


exports.editProduct = editProduct;

var deleteProduct = /*#__PURE__*/function () {
  var _ref22 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21(req, res) {
    var db, _yield$db$query47, _yield$db$query48, rows;

    return _regenerator["default"].wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            _context21.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context21.sent;
            _context21.next = 5;
            return db.query("DELETE FROM products WHERE idProduct=?;", [req.params.id]);

          case 5:
            _yield$db$query47 = _context21.sent;
            _yield$db$query48 = (0, _slicedToArray2["default"])(_yield$db$query47, 1);
            rows = _yield$db$query48[0];

            if (rows.affectedRows > 0) {
              res.send("Producto Eliminado con Exito");
            } else {
              res.send("No se pudo eliminar el producto");
            }

            db.end();

          case 10:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21);
  }));

  return function deleteProduct(_x41, _x42) {
    return _ref22.apply(this, arguments);
  };
}();
/*Metodos Generales de configuracion*/
// Agregar Tipo de Negocio para clasificar


exports.deleteProduct = deleteProduct;

var addBusinessType = /*#__PURE__*/function () {
  var _ref23 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22(req, res) {
    var db, _yield$db$query49, _yield$db$query50, rows;

    return _regenerator["default"].wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            _context22.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context22.sent;
            _context22.prev = 3;
            _context22.next = 6;
            return db.query("INSERT INTO businesstype (bName, bDescription) VALUES (?,?);", [req.body.bName, req.body.bDescription]);

          case 6:
            _yield$db$query49 = _context22.sent;
            _yield$db$query50 = (0, _slicedToArray2["default"])(_yield$db$query49, 1);
            rows = _yield$db$query50[0];
            res.json(rows.insertId);
            _context22.next = 15;
            break;

          case 12:
            _context22.prev = 12;
            _context22.t0 = _context22["catch"](3);
            console.log(_context22.t0);

          case 15:
            db.end();

          case 16:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22, null, [[3, 12]]);
  }));

  return function addBusinessType(_x43, _x44) {
    return _ref23.apply(this, arguments);
  };
}(); // Metodo para agregar Clasificacion de Productos


exports.addBusinessType = addBusinessType;

var addTechnology = /*#__PURE__*/function () {
  var _ref24 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23(req, res) {
    var db, _yield$db$query51, _yield$db$query52, rows;

    return _regenerator["default"].wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            _context23.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context23.sent;
            _context23.prev = 3;
            _context23.next = 6;
            return db.query("INSERT INTO technologies (nameTechnology) VALUES (?);", [req.body.nameTechnology]);

          case 6:
            _yield$db$query51 = _context23.sent;
            _yield$db$query52 = (0, _slicedToArray2["default"])(_yield$db$query51, 1);
            rows = _yield$db$query52[0];
            res.json(rows.insertId);
            _context23.next = 15;
            break;

          case 12:
            _context23.prev = 12;
            _context23.t0 = _context23["catch"](3);
            console.log(_context23.t0);

          case 15:
            db.end();

          case 16:
          case "end":
            return _context23.stop();
        }
      }
    }, _callee23, null, [[3, 12]]);
  }));

  return function addTechnology(_x45, _x46) {
    return _ref24.apply(this, arguments);
  };
}(); // Metodo para agregar Clasificacion de Proveedores


exports.addTechnology = addTechnology;

var addsClasification = /*#__PURE__*/function () {
  var _ref25 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24(req, res) {
    var db, _yield$db$query53, _yield$db$query54, rows;

    return _regenerator["default"].wrap(function _callee24$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            _context24.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context24.sent;
            _context24.prev = 3;
            _context24.next = 6;
            return db.query("INSERT INTO sclasification (clasificationName) VALUES (?);", [req.body.clasificationName]);

          case 6:
            _yield$db$query53 = _context24.sent;
            _yield$db$query54 = (0, _slicedToArray2["default"])(_yield$db$query53, 1);
            rows = _yield$db$query54[0];
            res.json(rows.insertId);
            _context24.next = 15;
            break;

          case 12:
            _context24.prev = 12;
            _context24.t0 = _context24["catch"](3);
            console.log(_context24.t0);

          case 15:
            db.end();

          case 16:
          case "end":
            return _context24.stop();
        }
      }
    }, _callee24, null, [[3, 12]]);
  }));

  return function addsClasification(_x47, _x48) {
    return _ref25.apply(this, arguments);
  };
}(); //Metodo para agregar Tipos de Domicilio


exports.addsClasification = addsClasification;

var addaType = /*#__PURE__*/function () {
  var _ref26 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee25(req, res) {
    var db, _yield$db$query55, _yield$db$query56, rows;

    return _regenerator["default"].wrap(function _callee25$(_context25) {
      while (1) {
        switch (_context25.prev = _context25.next) {
          case 0:
            _context25.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context25.sent;
            _context25.prev = 3;
            _context25.next = 6;
            return db.query("INSERT INTO adresstype (aType) VALUES (?);", [req.body.aType]);

          case 6:
            _yield$db$query55 = _context25.sent;
            _yield$db$query56 = (0, _slicedToArray2["default"])(_yield$db$query55, 1);
            rows = _yield$db$query56[0];
            res.json(rows.insertId);
            _context25.next = 15;
            break;

          case 12:
            _context25.prev = 12;
            _context25.t0 = _context25["catch"](3);
            console.log(_context25.t0);

          case 15:
            db.end();

          case 16:
          case "end":
            return _context25.stop();
        }
      }
    }, _callee25, null, [[3, 12]]);
  }));

  return function addaType(_x49, _x50) {
    return _ref26.apply(this, arguments);
  };
}(); // Para guardar fechas convertir a año, mes + 1 y dia con funciones getfullyear(), getmounth(), getdate(),   


exports.addaType = addaType;