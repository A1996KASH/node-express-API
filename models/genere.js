var mongoose = require('mongoose');

var genreSchema = mongoose.Schema({
        name: {
            type: String,
            required : true
        },
        create_date:{
            type: Date,
            default: Date.now
        }

});

var Genre = module.exports = mongoose.model('Genre', genreSchema);


// Get Genres

module.exports.getGenres = (callback, Limit) => {
    Genre.find(callback).limit(Limit);
}

// add GENRE

module.exports.addGenres = (genre,callback) => {
    Genre.create(genre,callback);
}