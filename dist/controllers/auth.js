"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serchUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _md = _interopRequireDefault(require("md5"));

var _database = require("../database/database");

//Metodo para Buscar un Usuario
var serchUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var db, _yield$db$query, _yield$db$query2, _yield$db$query2$, rows, _yield$db$query3, _yield$db$query4, _yield$db$query4$, user;

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
            return db.query("SELECT idUsers FROM users WHERE nameUser = BINARY ?;", [req.body.nameUser]);

          case 6:
            _yield$db$query = _context.sent;
            _yield$db$query2 = (0, _slicedToArray2["default"])(_yield$db$query, 1);
            _yield$db$query2$ = (0, _slicedToArray2["default"])(_yield$db$query2[0], 1);
            rows = _yield$db$query2$[0];

            if (!rows) {
              _context.next = 20;
              break;
            }

            _context.next = 13;
            return db.query("SELECT * FROM users WHERE idUsers = ?", [encodeURI(rows.idUsers)]);

          case 13:
            _yield$db$query3 = _context.sent;
            _yield$db$query4 = (0, _slicedToArray2["default"])(_yield$db$query3, 1);
            _yield$db$query4$ = (0, _slicedToArray2["default"])(_yield$db$query4[0], 1);
            user = _yield$db$query4$[0];
            (0, _md["default"])(req.body.passwordUser) === user.passwordUser ? res.status(200).json({
              message: "Acceso concedido",
              user: {
                idUsers: user.idUsers,
                nameUser: user.nameUser,
                namePerson: user.namePerson,
                FkRole: user.FkRole,
                tokenUser: "1234dcsdfs"
              }
            }) : res.status(404).send("Contraseña Incorrecta");
            _context.next = 21;
            break;

          case 20:
            res.status(401).send("Usuario no Encontrado");

          case 21:
            db.end();
            _context.next = 27;
            break;

          case 24:
            _context.prev = 24;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 24]]);
  }));

  return function serchUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.serchUser = serchUser;