import mongoose from "mongoose";

/**
 * 1- Esquema (Schema)
 * 2.- Nombre del modelo
 */

const schema = new mongoose.Schema({
    title: String,
    author: String,
    edition: String,
    pages: Number,
    isbn: String,
    publishDate: Date,
})

const name = 'Book';

export default mongoose.model('Book', schema);