import Book from './models/Book.js';

const createBook = async () =>{
    await Book.create({
        author: "David",
        edition: "2022",
        isbn: '0102021',
        pages: 140,
        publishDate: new Date(),
        title: "The coder"
    });
};

const updateBook = async() => {
    await Book.updateOne({
        pages: 140,
        isbn: '0102021',
    },
    {
        author: 'Krono',
    })
}

const readBook = async() => {
    const books = await Book.find({
        pages: 140,
    });
    
    console.log('====================================');
    console.log(books);
    console.log('====================================');

}

const deleteBook = async() => {
    await Book.deleteOne({
        _id: '62f59b34a0e2500a4d3892c6',
    });
}
export { createBook, updateBook, readBook, deleteBook }