import { Router } from "express";
import { serchUser } from "../controllers/auth";
const authRouter = Router();

//Autenticar Usuario
authRouter.post("/", serchUser);

authRouter.get("/logout")


export default authRouter