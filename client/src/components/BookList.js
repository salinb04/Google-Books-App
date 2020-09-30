import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

import BookItem from "./BookItem";

const BookList = (props) => {
  const { books } = props;

  return (
    <ListGroup variant="flush">
      {books.map((book) => (
        <BookItem key={book} book={book} />
      ))}
    </ListGroup>
  );
};

const apiKey = "AIzaSyA-ocxI5H_L_-P8w2fwicnITvo83Y9f8Ss";

export default BookList;
