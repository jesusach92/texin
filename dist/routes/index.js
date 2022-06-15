"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _fs = _interopRequireDefault(require("fs"));

var _supplies = _interopRequireDefault(require("./supplies"));

var _adress = _interopRequireDefault(require("./adress"));

var _auth = _interopRequireDefault(require("./auth"));

var _config = _interopRequireDefault(require("./config"));

var _products = _interopRequireDefault(require("./products"));

var _supplys = _interopRequireDefault(require("./supplys"));

var _users = _interopRequireDefault(require("./users"));

var _contacts = _interopRequireDefault(require("./contacts"));

var router = (0, _express.Router)();
/* Importing the routes from the other files. */

router.use("/auth", _auth["default"]);
router.use("/adress", _adress["default"]);
router.use("/config", _config["default"]);
router.use("/contacts", _contacts["default"]);
router.use("/products", _products["default"]);
router.use("/supplies", _supplies["default"]);
router.use("/supplys", _supplies["default"]);
router.use("/users", _users["default"]);
/**
 * It takes a file name as a string, splits it into an array of strings, and returns the first element
 * of that array.
 * @param fileName - The name of the file you want to remove the extension from.
 * @returns The file name without the extension.
 */
// const removeExtension = (fileName) => {
//   return fileName.split(".").shift();
// };
// /* Setting the path to the current directory. */
// const pathRouter = `${__dirname}`;
// /* Reading the directory of the current file, filtering out the index file, and then requiring all the
// other files in the directory. */
// const routes = fs.readdirSync(pathRouter)
//   .filter((file) => file !== "index.js")
//   .map((file) =>
//     removeExtension(file)
//   );
//   console.log(routes)
//.filter((file) => {
//   const fileWithOutExt = removeExtension(file);
//   const skip = ["index"].includes(fileWithOutExt);
//   if (!skip) {
//     // import(`./${fileWithOutExt}`)
//     //   .then((module) => {
//     //     router.use(`/${fileWithOutExt}`, module.router);
//     //   })
//     //   .catch(console.error);
//   }
// });

/* A catch all route that will catch any route that is not defined. */

router.get("*", function (req, res) {
  res.status(404);
  res.send({
    error: "Not Found"
  });
});
var _default = router;
exports["default"] = _default;