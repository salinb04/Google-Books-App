import React, { useState, useEffect } from "react";
import BookList from "../components/BookList";

const Saved = () => {
  const [savedBooks, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const onDelete = (id) => {
    fetch(`/api/books/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        fetchBooks();
      })
      .catch((err) => console.log(err));
  };

  const fetchBooks = () => {
    fetch(`/api/books`)
      .then((result) => result.json())
      .then((result) => setBooks(result));
  };

  return (
    <>
      <h1>Saved</h1>
      <BookList books={savedBooks} deleteBook={onDelete} />
    </>
  );
};

export default Saved;
