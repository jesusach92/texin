"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.getRoleUser = exports.getListUsers = exports.deleteUSer = exports.addUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database/database");

// Metodo para Listar Usuarios con Id, Nombre de Usuario, Rol de Usuario y Nombre de Persona
var getListUsers = /*#__PURE__*/function () {
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
            return db.query("SELECT idUsers, nameUser, namePerson,FkRole ,idRole, nameRole, privileges FROM users inner join role on FkRole= idRole;");

          case 6:
            _yield$db$query = _context.sent;
            _yield$db$query2 = (0, _slicedToArray2["default"])(_yield$db$query, 1);
            rows = _yield$db$query2[0];
            res.json(rows);
            db.end();
            _context.next = 15;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));

  return function getListUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // Metodo de Borrado de Usuarios


exports.getListUsers = getListUsers;

var deleteUSer = /*#__PURE__*/function () {
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
            return db.query("DELETE FROM users WHERE idUsers=?", [req.params.id]);

          case 6:
            _yield$db$query3 = _context2.sent;
            _yield$db$query4 = (0, _slicedToArray2["default"])(_yield$db$query3, 1);
            rows = _yield$db$query4[0];
            rows.affectedRows > 0 ? res.json({
              value: 1
            }) : res.json({
              value: 0
            });
            _context2.next = 14;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 12]]);
  }));

  return function deleteUSer(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // Metodo para obtener Roles de Usuario


exports.deleteUSer = deleteUSer;

var getRoleUser = /*#__PURE__*/function () {
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
            return db.query("select * from role;");

          case 6:
            _yield$db$query5 = _context3.sent;
            _yield$db$query6 = (0, _slicedToArray2["default"])(_yield$db$query5, 1);
            rows = _yield$db$query6[0];
            res.json(rows);
            _context3.next = 14;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 12]]);
  }));

  return function getRoleUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //Agregar Usuario


exports.getRoleUser = getRoleUser;

var addUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var db, _yield$db$query7, _yield$db$query8, rows, result;

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
            return db.query("SELECT * FROM users WHERE nameUser =?;", [req.body.nameUser]);

          case 6:
            _yield$db$query7 = _context4.sent;
            _yield$db$query8 = (0, _slicedToArray2["default"])(_yield$db$query7, 1);
            rows = _yield$db$query8[0];

            if (!(rows.length > 0)) {
              _context4.next = 13;
              break;
            }

            res.json({
              value: 1,
              message: "El Nombre de Usuario ya esta registrado"
            });
            _context4.next = 17;
            break;

          case 13:
            _context4.next = 15;
            return db.query("INSERT INTO users (FkRole,nameUser,passwordUser,namePerson) values (?,?,md5(?),?);", [req.body.FkRole, req.body.nameUser, req.body.passwordUser, req.body.namePerson]);

          case 15:
            result = _context4.sent;

            if (result.affectedRows !== 0) {
              res.json({
                value: 1,
                message: "Usuario registrado exitosamente"
              });
            } else {
              res.json({
                value: 0,
                message: "error de registro"
              });
            }

          case 17:
            db.end();
            _context4.next = 23;
            break;

          case 20:
            _context4.prev = 20;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 23:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 20]]);
  }));

  return function addUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); // Actualizar Usuario


exports.addUser = addUser;

var updateUser = /*#__PURE__*/function () {
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
            return db.query("UPDATE users set FkRole=?, nameUser=?,passwordUser=md5(?) , namePerson=? WHERE idUsers=?;", [req.body.FkRole, req.body.nameUser, req.body.passwordUser, req.body.namePerson, req.body.idUsers]);

          case 6:
            _yield$db$query9 = _context5.sent;
            _yield$db$query10 = (0, _slicedToArray2["default"])(_yield$db$query9, 1);
            rows = _yield$db$query10[0];
            rows.affectedRows > 0 ? res.json({
              value: 1
            }) : res.json({
              value: 0
            });
            _context5.next = 15;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 12]]);
  }));

  return function updateUser(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateUser = updateUser;