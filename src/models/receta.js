import mongoose, { Schema } from "mongoose";

const recetaSchema = new Schema({
    nombreReceta: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 100,
        unique: true
    },
    ingredientes: {
        type: String,
        required: true
    },
    preparacion: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    }
})

const Receta = mongoose.model('receta', recetaSchema);

export default Receta;