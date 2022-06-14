import { Router } from "express";
import { serchUser } from "../controllers/auth";
const router = Router();

//Autenticar Usuario
router.post("/", serchUser);

router.get("/logout")


export  {router}