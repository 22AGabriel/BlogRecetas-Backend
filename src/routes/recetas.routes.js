import { Router } from "express";
import { borrarReceta, crearReceta, editarReceta, listarRecetas, obtenerReceta } from "../controllers/recetas.controllers";
import { check } from "express-validator";

const router = Router();

router
  .route("/recetas")
    .get(listarRecetas)
    .post(
        [
            check("nombreReceta")
              .notEmpty()
              .withMessage("El nombre de la receta es un campo obligatorio")
              .isLength({min: 5, max: 100})
              .withMessage("El nombre del producto debe tener entre 2 y 100 caracteres"),
            check("ingredientes")
              .notEmpty()
              .withMessage("Los ingredientes de la receta son un campo obligatorio")
              .isLength({min: 20})
              .withMessage("Los ingredientes tienen un mínimo de 20 caracteres"),
            check("preparacion")
              .notEmpty()
              .withMessage("Los pasos de la receta son un campo obligatorio")
              .isLength({min: 20})
              .withMessage("Los pasos tienen un mínimo de 20 caracteres"),
            check("imagen")
              .notEmpty()
              .withMessage("La URL de la imagen es un campo obligatorio")
              .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
              .withMessage("Debe ingresar una URL válida"),
            check("categoria")
              .notEmpty()
              .withMessage("La categoria es un campo obligatorio")
              .isIn(["Dulce", "Salado"])
              .withMessage("Debe ingresar una categoria válida")
        ],
        crearReceta)

router
  .route("/recetas/:id")
    .get(obtenerReceta)
    .put(
        [
            check("nombreReceta")
              .notEmpty()
              .withMessage("El nombre de la receta es un campo obligatorio")
              .isLength({min: 5, max: 100})
              .withMessage("El nombre del producto debe tener entre 2 y 100 caracteres"),
            check("ingredientes")
              .notEmpty()
              .withMessage("Los ingredientes de la receta son un campo obligatorio")
              .isLength({min: 20})
              .withMessage("Los ingredientes tienen un mínimo de 20 caracteres"),
            check("preparacion")
              .notEmpty()
              .withMessage("Los pasos de la receta son un campo obligatorio")
              .isLength({min: 20})
              .withMessage("Los pasos tienen un mínimo de 20 caracteres"),
            check("imagen")
              .notEmpty()
              .withMessage("La URL de la imagen es un campo obligatorio")
              .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
              .withMessage("Debe ingresar una URL válida"),
            check("categoria")
              .notEmpty()
              .withMessage("La categoria es un campo obligatorio")
              .isIn(["Dulce", "Salado"])
              .withMessage("Debe ingresar una categoria válida")
        ],
        editarReceta)
    .delete(borrarReceta)

export default router;