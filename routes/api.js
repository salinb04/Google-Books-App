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
  // TODO: Fetch books from DB
  res.json([]);
});

router.post("/books", ({ body }, res) => {
  // TODO: Save book to DB
  res.json(body);
});

router.delete("/books/:id", (req, res) => {
  const id = req.params.id;
  // TODO: Fetch books from DB
  res.json({ id });
});

module.exports = router;
