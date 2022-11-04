import Receta from "../models/receta";

export const listarRecetas = (req, res) => {
  res.send("Esto es una prueba de una peticion get");
};

export const crearReceta = async(req, res) => {
    // Validar el body

    // Guardar el objeto
    try {
        const recetaNueva = new Receta(req.body)
        await recetaNueva.save();
        res.status(201).json({
            mensaje: "Se agregó la receta"
        })
      } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Ocurrió un error al intentar agregar la receta"
        })
      }
};
