"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRegister = exports.serchUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _md = _interopRequireDefault(require("md5"));

var _database = require("../database/database");

// Metodo para Registrar un Usuario
var userRegister = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var db, _yield$db$query, _yield$db$query2, rows, result;

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
            return db.query("SELECT * FROM users WHERE nameUSer = BINARY ?", [req.body.nameUser]);

          case 6:
            _yield$db$query = _context.sent;
            _yield$db$query2 = (0, _slicedToArray2["default"])(_yield$db$query, 1);
            rows = _yield$db$query2[0];

            if (!(rows.length > 0)) {
              _context.next = 13;
              break;
            }

            res.json({
              value: 2
            });
            _context.next = 17;
            break;

          case 13:
            _context.next = 15;
            return db.query("INSERT INTO users (nameUser, passwordUser, namePerson) VALUES (?,MD5(?), ?);", [req.body.nameUser, req.body.passwordUser, req.body.namePerson]);

          case 15:
            result = _context.sent;
            res.json({
              value: 1,
              id: result.rows
            });

          case 17:
            db.end();
            _context.next = 23;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 20]]);
  }));

  return function userRegister(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //Metodo para Buscar un Usuario


exports.userRegister = userRegister;

var serchUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var db, _yield$db$query3, _yield$db$query4, _yield$db$query4$, rows, _yield$db$query5, _yield$db$query6, _yield$db$query6$, user;

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
            return db.query("SELECT idUsers FROM users WHERE nameUser = BINARY ?;", [req.body.nameUser]);

          case 6:
            _yield$db$query3 = _context2.sent;
            _yield$db$query4 = (0, _slicedToArray2["default"])(_yield$db$query3, 1);
            _yield$db$query4$ = (0, _slicedToArray2["default"])(_yield$db$query4[0], 1);
            rows = _yield$db$query4$[0];

            if (!rows) {
              _context2.next = 21;
              break;
            }

            _context2.next = 13;
            return db.query("SELECT * FROM users WHERE idUsers = ?", [encodeURI(rows.idUsers)]);

          case 13:
            _yield$db$query5 = _context2.sent;
            _yield$db$query6 = (0, _slicedToArray2["default"])(_yield$db$query5, 1);
            _yield$db$query6$ = (0, _slicedToArray2["default"])(_yield$db$query6[0], 1);
            user = _yield$db$query6$[0];
            console.log((0, _md["default"])(req.body.passwordUser));
            (0, _md["default"])(req.body.passwordUser) === user.passwordUser ? res.status(200).json({
              message: "Acceso concedido",
              user: {
                id: user.idUsers,
                nameUser: user.nameUser,
                namePerson: user.namePerson,
                roleUser: user.FkRole,
                tokenUser: '1234dcsdfs'
              }
            }) : res.status(404).send("Contraseña Incorrecta");
            _context2.next = 22;
            break;

          case 21:
            res.status(401).send("Usuario no Encontrado");

          case 22:
            db.end();
            _context2.next = 28;
            break;

          case 25:
            _context2.prev = 25;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 28:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 25]]);
  }));

  return function serchUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.serchUser = serchUser;