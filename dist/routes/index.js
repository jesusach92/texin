"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = require("express");

var _fs = _interopRequireDefault(require("fs"));

var router = (0, _express.Router)();
/**
 * It takes a file name as a string, splits it into an array of strings, and returns the first element
 * of that array.
 * @param fileName - The name of the file you want to remove the extension from.
 * @returns The file name without the extension.
 */

var removeExtension = function removeExtension(fileName) {
  return fileName.split(".").shift();
};
/* Setting the path to the current directory. */


var pathRouter = "".concat(__dirname);
/* Reading the directory of the current file, filtering out the index file, and then requiring all the
other files in the directory. */

_fs["default"].readdirSync(pathRouter).filter(function (file) {
  var fileWithOutExt = removeExtension(file);
  var skip = ['index'].includes(fileWithOutExt);

  if (!skip) {
    router.use("/".concat(fileWithOutExt), require("./".concat(fileWithOutExt)));
  }
});
/* A catch all route that will catch any route that is not defined. */


router.get("*", function (req, res) {
  res.status(404);
  res.send({
    error: "Not Found"
  });
});
module.exports = router;