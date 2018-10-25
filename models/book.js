var mongoose = require("mongoose");

var bookSchema = mongoose.Schema({
  name: {
    type: String,
    reqired: true
  },
  genre: {
    type: String,
    reqired: true
  },
  description: {
    type: String
  },
  author: {
    type: String
  },
  publisher: {
    type: String
  },
  pages: {
    type: String
  },
  image_url: {
    type: String
  },
  buy_url: {
    type: String
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

var Book = (module.exports = mongoose.model("Book", bookSchema));

// Get Books

module.exports.getBooks = (callback, Limit) => {
  Book.find(callback).limit(Limit);
};

module.exports.getBookbyId = (id,callback) => {
    Book.findById(id,callback);
  };

  module.exports.addBooks = (book,callback) => {
    Book.create(book,callback);
  };