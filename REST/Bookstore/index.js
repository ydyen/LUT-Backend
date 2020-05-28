const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const port = process.env.Port || 3000;

app.use(bodyParser.json());

Genre = require('./models/genre.js');
Book = require('./models/book.js');

//Connection to mongoose
mongoose.connect('mongodb://localhost:27017/bookstore');
const db = mongoose.connection;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/genres/', (req, res) => {
    Genre.getGenres((err, genres) =>{
        if(err) throw err;
        res.json(genres);
    })
})

app.post('/api/genres/', (req, res) => {
    const genre = req.body;
    Genre.addGenre(genre, (err, genre) =>{
        if(err) throw err;
        res.json(genre);
    })
})

app.put('/api/genres/:id', (req, res) => {
    const id = req.params.id;
    const genre = req.body;
    Genre.updateGenre(id, genre, {}, (err, genre) =>{
        if(err) throw err;
        res.json(genre);
    })
})

app.delete('/api/genres/:id', (req, res) => {
    const id = req.params.id;
    Genre.deleteGenre(id, (err, genre) =>{
        if(err) throw err;
        res.json(genre);
    })
})

app.get('/api/books', (req, res) => {
    Book.getBook((err, book) =>{
        if(err) throw err;
        res.json(book);
    })
})

app.post('/api/books', (req, res) => {
    const books = req.body;
    Book.addBook(books, (err, book) =>{
        if(err) throw err;
        res.json(book);
    })
})

app.get('/api/book/:_id', (req, res) => {
    Book.getBookById(req.params._id, (err, book) =>{
        if(err) throw err;
        res.json(book);
    })
})

app.put('/api/book/:_id', (req, res) => {
    const id = req.params._id;
    const books = req.body;
    Book.updateBook(id, books, {}, (err, book) =>{
        if(err) throw err;
        res.json(book);
    })
})

app.delete('/api/book/:id', (req, res) => {
    const id = req.params.id;
    Book.deleteBook(id, (err, book) =>{
        if(err) throw err;
        res.json(book);
    })
})

app.listen(port, () => console.log("Express is running"));