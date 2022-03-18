"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supplielist = exports.productlist = exports.getsuppliebyproduct = exports.getsuppliebyid = exports.getproductsbysupplie = exports.getproductbyid = exports.addsupplie = exports.addproduct = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database/database");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// Listar proveedores con contacto y domicilio principal
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
            return db.query("SELECT * FROM supplie t1 JOIN businesstype t2 JOIN adress_supplie t3 JOIN contact_supplies t4 ON t1.idBusinessType_Sup = t2.idbusinessType AND t1.id_supplie = t3.idSupplieAd AND t3.id_adress = t4.id_AdressCont WHERE t3.adress_principal = 1 AND t4.contact_principal =1 ORDER BY t1.id_supplie;");

          case 5:
            _yield$db$query = _context.sent;
            _yield$db$query2 = (0, _slicedToArray2["default"])(_yield$db$query, 1);
            rows = _yield$db$query2[0];
            res.json(rows);
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
}(); // Listar Productos


exports.supplielist = supplielist;

var productlist = /*#__PURE__*/function () {
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
            return db.query("SELECT * FROM products t1 JOIN technologies t2 ON t1.idTechnology_Pro = t2.id_technology;");

          case 5:
            _yield$db$query3 = _context2.sent;
            _yield$db$query4 = (0, _slicedToArray2["default"])(_yield$db$query3, 1);
            rows = _yield$db$query4[0];
            res.json(rows);
            db.end();

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function productlist(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // Obtener Domicilios de Proveedores con contacto principal


exports.productlist = productlist;

var getsuppliebyid = /*#__PURE__*/function () {
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
            return db.query("select * from supplie t1 join businesstype t2 join adress_supplie t3 join contact_supplies t4 on t1.idBusinessType_Sup = t2.idbusinessType and t1.id_supplie = t3.idSupplieAd and t3.id_adress = t4.id_AdressCont where t1.id_supplie= ? AND t4.contact_principal =1 ORDER BY t3.adress_principal DESC;", [req.params.id]);

          case 5:
            _yield$db$query5 = _context3.sent;
            _yield$db$query6 = (0, _slicedToArray2["default"])(_yield$db$query5, 1);
            rows = _yield$db$query6[0];
            res.json(rows);
            db.end();

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getsuppliebyid(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //Productos por Proveedor


exports.getsuppliebyid = getsuppliebyid;

var getproductsbysupplie = /*#__PURE__*/function () {
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
            return db.query("SELECT * FROM supply t1 JOIN products t2 JOIN supplie t3 ON t1.idProduct_spy= t2.id_product  AND t1.idSupplie_spy = t3.id_supplie  WHERE t1.idSupplie_spy = ?;", [req.params.id]);

          case 5:
            _yield$db$query7 = _context4.sent;
            _yield$db$query8 = (0, _slicedToArray2["default"])(_yield$db$query7, 1);
            rows = _yield$db$query8[0];
            res.json(rows);
            db.end();

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getproductsbysupplie(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getproductsbysupplie = getproductsbysupplie;

var getproductbyid = /*#__PURE__*/function () {
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
            return db.query("SELECT * FROM products WHERE id_product = ?", [req.params.id]);

          case 5:
            _yield$db$query9 = _context5.sent;
            _yield$db$query10 = (0, _slicedToArray2["default"])(_yield$db$query9, 1);
            rows = _yield$db$query10[0];
            res.json(rows);
            db.end();

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getproductbyid(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); //Obtener Proveedores del Producto ID


exports.getproductbyid = getproductbyid;

var getsuppliebyproduct = /*#__PURE__*/function () {
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
            return db.query("SELECT * FROM supply t1 JOIN products t2 JOIN supplie t3 JOIN technologies t4 ON t1.idProduct_spy = t2.id_product AND t2.idTechnology_Pro = t4.id_technology AND t1.idSupplie_spy = t3.id_supplie WHERE t1.idProduct_spy = ? ORDER BY t1.delivery_time and t1.price DESC;", [req.params.id]);

          case 5:
            _yield$db$query11 = _context6.sent;
            _yield$db$query12 = (0, _slicedToArray2["default"])(_yield$db$query11, 1);
            rows = _yield$db$query12[0];
            res.json(rows);
            db.end();

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function getsuppliebyproduct(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getsuppliebyproduct = getsuppliebyproduct;

var addsupplie = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var db, result;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context7.sent;
            _context7.next = 5;
            return db.query("INSERT INTO supplie (supplie_name, idBusinessType_Sup) VALUES (? , ?)", [req.body.supplie_name, req.body.idBusinessType_Sup]);

          case 5:
            result = _context7.sent;
            db.end();

          case 7:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function addsupplie(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.addsupplie = addsupplie;

var addproduct = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var db, _yield$db$query13, _yield$db$query14, result;

    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context8.sent;
            _context8.next = 5;
            return db.query("INSERT INTO products (productName, description_product, idTechnology_Pro) values(?,?,?)", [req.body.productName, req.body.description_product, req.body.idTechnology_Pro]);

          case 5:
            _yield$db$query13 = _context8.sent;
            _yield$db$query14 = (0, _slicedToArray2["default"])(_yield$db$query13, 1);
            result = _yield$db$query14[0];
            res.json(_objectSpread({
              id: result.insertId
            }, req.body));
            db.end();

          case 10:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function addproduct(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.addproduct = addproduct;