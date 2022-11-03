import mongoose from 'mongoose';

const url = 'mongodb://127.0.0.1:27017/bd-blogrecetas';

mongoose.connect(url);

const datosConnection = mongoose.connection;

datosConnection.once('open', () => {
    console.log('BD conectada')
})