import mongoose from 'mongoose';

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Se ha conectado a la base de datos 🟢');
});

db.on('connecting', () => {
    console.info('Intentando conectar a la base de datos de mongo 🟡');
});

db.on('error', () => {
    console.info('Ha ocurrido un error en la conexion 🔴');
});

db.on('disconnected', () => {
    console.info('Se ha desconectado la base de datos 🟨');
});


mongoose.connect('mongodb://localhost:27017/test');