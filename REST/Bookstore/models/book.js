const mongoose = require('mongoose');

//schema
var bookSchema = mongoose.Schema({
    title: String,
    genre: String,
    description: String,
    author: String,
    publisher: String,
    page: String,
    image_url: String,
    buy_url: String,
    create_date: {
        type: Date,
        default: Date.now,
    },
});

const Book = module.exports = mongoose.model('Book', bookSchema);

//get Genres
module.exports.getBook = (callback, limit) => {
    Book.find(callback).limit(limit);
}

module.exports.getBookById = (id, callback) => {
    Book.findById(id, callback)
}

//Add Book to books database, name must match
module.exports.addBook = (books, callback) => {
    Book.create(books, callback);
}

//update a book
module.exports.updateBook = (id, books, options, callback) => {
    const query = { _id: id };
    const update = {
        title: books.title,
        genre: books.genre,
        description: books.description,
        author: books.author,
        publisher: books.publisher,
        page: books.page,
        image_url: books.image_url,
        buy_url: books.buy_url,
    };
    Book.findOneAndUpdate(query, update, options, callback);
}
//update a book
module.exports.deleteBook = (id, callback) => {
    const query = { _id: id };
    Book.remove(query, callback);
}