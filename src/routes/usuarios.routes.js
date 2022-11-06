import { Router } from "express";
import { login, registrarUsuario } from "../controllers/usuarios.controllers";

const router = Router();

router.route("/registrar").post(registrarUsuario)

router.route("/login").get(login)

export default router;