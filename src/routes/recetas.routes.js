import { Router } from "express";
import { crearReceta, editarReceta, listarRecetas } from "../controllers/recetas.controllers";

const router = Router();

router.route("/recetas").get(listarRecetas).post(crearReceta)

router.route("/recetas/:id").put(editarReceta)

export default router;