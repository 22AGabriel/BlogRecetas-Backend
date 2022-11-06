import { Router } from "express";
import { registrarUsuario } from "../controllers/usuarios.controllers";

const router = Router();

router.route("/registrar").post(registrarUsuario)

export default router;