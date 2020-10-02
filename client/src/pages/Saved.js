import React from "react";
import BookList from "../components/BookList";

const Saved = () => {
  const savedBooks = []; // Source of data

  // const getSaved -> fetch from database

  return (
    <>
      <h1>Saved</h1>
      <BookList books={savedBooks} />
    </>
  );
};

export default Saved;
