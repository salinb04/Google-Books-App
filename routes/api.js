const router = require("express").Router();
const Book = require("../models/Book");

/*
  6. Add the following Express routes for your app:

  * `/api/books` (get) - Should return all saved books as JSON.
  
  * `/api/books` (post) - Will be used to save a new book to the database.
  
  * `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.

  * `*` (get) - Will load your single HTML page in `client/build/index.html`. Make sure you have this _after_ all other routes are defined.
*/

router.get("/books", (req, res) => {
  Book.find((err, results) => {
    if (err) {
      res.json([]);
    } else {
      res.json(results);
    }
  });
});

router.post("/books", (req, res) => {
  const book = req.body;

  Book.create(book, (err, createdBook) => {
    if (err) {
      console.log(err);
      res.json({ error: "Could not create book" });
    } else {
      res.json(createdBook);
    }
  });
});

router.delete("/books/:id", (req, res) => {
  const id = req.params.id;
  Book.findByIdAndDelete(id, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Deleted : ", docs);
    }
  });

  res.json({});
});

module.exports = router;
