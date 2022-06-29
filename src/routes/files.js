import { Router } from "express";
import { fileUp, getFile, uploadFile } from "../controllers/files";

const routes = Router();

routes.get("/", getFile)

routes.post("/",uploadFile.single('catalogo'), fileUp)

export default routes