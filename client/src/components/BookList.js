import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

import BookItem from "./BookItem";

const BookList = (props) => {
  const books = props.books;
  const saveBook = props.saveBook;
  const deleteBook = props.deleteBook;

  return (
    <ListGroup variant="flush">
      {books.map((book) => (
        <BookItem
          key={book.title + book.description.length}
          book={book}
          saveBook={saveBook}
          deleteBook={deleteBook}
        />
      ))}
    </ListGroup>
  );
};

const apiKey = "AIzaSyA-ocxI5H_L_-P8w2fwicnITvo83Y9f8Ss";

export default BookList;
