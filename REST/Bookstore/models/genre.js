const mongoose = require('mongoose');

//schema
const genreSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    create_date: {
        type: Date, 
        default: Date.now,
    },
    
});

const Genre = module.exports = mongoose.model('Genre', genreSchema);

//get Genres
module.exports.getGenres = (callback, limit) => {
    Genre.find(callback).limit(limit);
}

//Add Genre
module.exports.addGenre = (genre, callback) => {
    Genre.create(genre, callback);
}

//Update Genre
module.exports.updateGenre = (id, genres, options, callback) => {
    const query = {_id: id};
    const update = {
        name: genres.name
    };
    Genre.findOneAndUpdate(query, update, options, callback);
}

//delete Genre
module.exports.deleteGenre = (id, callback) => {
    const query = {_id: id};
    Genre.remove(query, callback);
}