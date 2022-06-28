import { Router } from "express";
import { serchUser } from "../controllers/auth";
const routes = Router();

//Autenticar Usuario
routes.post("/", serchUser);

routes.get("/logout")


export default routes