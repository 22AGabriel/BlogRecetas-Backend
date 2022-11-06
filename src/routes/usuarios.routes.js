import { Router } from "express";
import { login, registrarUsuario } from "../controllers/usuarios.controllers";
import { check } from "express-validator";

const router = Router();

router
  .route("/registrar")
    .post(
        [
            check("nombre")
              .notEmpty() 
              .withMessage("Este campo es obligatorio")
              .isLength({min: 3})
              .withMessage("El mínimo de caracteres es de 3"),
            check("apellido")
              .notEmpty() 
              .withMessage("Este campo es obligatorio")
              .isLength({min: 3})
              .withMessage("El mínimo de caracteres es de 3"),
            check("email")
              .notEmpty() 
              .withMessage("Este campo es obligatorio")
              .matches(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)
              .withMessage("Debe ingresar un email válido"),
            check("password")
              .notEmpty() 
              .withMessage("Este campo es obligatorio")
              .matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)
              .withMessage("Entre 8 y 16 caracteres, al menos un dígito, al menos una mayúscula, al menos una minúscula y NO puede tener otros símbolos.")
        ],
    registrarUsuario)

router.route("/login").get(login)

export default router;