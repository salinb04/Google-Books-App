import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

/*
  title - Title of the book from the Google Books API

  authors - The books's author(s) as returned from the Google Books API

  description - The book's description as returned from the Google Books API

  image - The Book's thumbnail image as returned from the Google Books API

  link - The Book's information link as returned from the Google Books API
*/

const BookItem = (props) => {
  const { book, saveBook, deleteBook } = props;

  const isSaved = book._id;
  const onClick = () => {
    isSaved ? deleteBook(book._id) : saveBook(book);
  };

  return (
    <ListGroup.Item>
      <h3>{book.title}</h3>
      <p>Written By {(book.authors || []).join(", ")}</p>
      <img alt=" " src={book.image}></img>
      <p>{book.description}</p>
      <a href={book.link}>
        <button>View</button>
      </a>
      <button onClick={onClick}>{isSaved ? "Delete" : "Save"}</button>
    </ListGroup.Item>
  );
};

export default BookItem;
