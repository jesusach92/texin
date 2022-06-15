import { Router } from "express";
import fs from "fs";
import suppliesRouter from "./supplies";
import adressRouter from "./adress";
import authRouter from "./auth";
import configRouter from "./config";
import productsRouter from "./products";
import supplysRouter from "./supplys";
import userRouter from "./users";
import contactsRouter from "./contacts"
const router = Router();

/* Importing the routes from the other files. */
router.use(`/auth`, authRouter);
router.use(`/adress`, adressRouter);
router.use(`/config`, configRouter);
router.use(`/contacts`, contactsRouter);
router.use(`/products`, productsRouter);
router.use(`/supplies`, suppliesRouter);
router.use(`/supplys`, suppliesRouter);
router.use(`/users`, userRouter);

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
router.get("*", (req, res) => {
  res.status(404);
  res.send({ error: "Not Found" });
});

export default router;
