var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var mongoose = require("mongoose");

Genre = require("./models/genere");
Books = require("./models/book");
// connect to mongoose
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/bookstore");

var db = mongoose.connection;

app.get("/", (req, res) => {
  res.send("Please a  use the /api/book/ or api/genre");
});
app.get("/api/genres", (req, res) => {
  Genre.getGenres((err, genres) => {
    if (err) {
      throw err;
    }
    res.json(genres);
  });
});

app.post("/api/genres", (req, res) => {
  var genre = req.body;
  Genre.addGenres(genre, (err, genre) => {
    if (err) {
      throw err;
    }
    res.json(genre);
  });
});

app.post("/api/books", (req, res) => {
  var book = req.body;
  Books.addBooks(book, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

app.get("/api/books", (req, res) => {
  Books.getBooks((err, books) => {
    if (err) {
      throw err;
    }
    res.json(books);
  });
});
app.listen(3000);
console.log("Running server on port 3000");
