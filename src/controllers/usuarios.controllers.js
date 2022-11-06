import Usuario from "../models/usuario";

export const registrarUsuario = async (req, res) => {
    try {
        const usuarioNuevo = new Usuario(req.body);
        await usuarioNuevo.save();
        res.status(201).json({
          mensaje: "Se registró el usuario",
        });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        mensaje: "Error al regsitrar el usuario",
      });
    }
};

export const login = async (req, res) => {
    try {
      const usuarios = await Usuario.find();
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(400).json({
        mensaje: "Error al buscar los usuarios",
      });
    }
  };