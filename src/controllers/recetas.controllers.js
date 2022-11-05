import Receta from "../models/receta";

export const listarRecetas = async(req, res) => {
  try{
    const recetas = await Receta.find()
    res.status(200).json(recetas);
  } catch (error){
    console.log(error)
    res.status(404).json({
      mensaje: 'Error al buscar las recetas'
    })
  }
};

export const obtenerReceta = async(req, res) => {
  try {
    const recetaBuscada = await Receta.findById(req.params.id)
    res.status(200).json(recetaBuscada)
  } catch (error) {
    console.log(error)
    res.status(404).json({
      mensaje: 'Error al buscar la receta'
    })
  }
}

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

export const editarReceta = async(req, res) => {
  try {
    await Receta.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: 'La receta pudo ser editada correctamente'
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      mensaje: 'Error al intentar editar la receta'
    })
  }
}