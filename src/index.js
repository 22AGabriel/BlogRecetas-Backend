import express from "express"
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import "./database"

const app = express();
app.set("port", process.env.PORT || 4005)

app.listen(app.get("port"), ()=>{
    console.log("estoy en el puerto " + app.get("port"))
})

// Midlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extends:true}));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'../public')));

// Rutas
app.get("apiblogrecetas", (req, res)=>{
    res.send('Esto es una prueba de una peticion get')
})