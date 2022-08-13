import mongoose from 'mongoose';
import { createBook, deleteBook, readBook, updateBook } from './crud.js';
import 'dotenv/config'
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


mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_USER_KEY}@cluster0.dk4pq9v.mongodb.net/base1?retryWrites=true&w=majority`, () => {
    console.log('Callback de función connect');
    createBook();
    updateBook();
    readBook();
    deleteBook();
});