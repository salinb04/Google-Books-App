import React, { useEffect, useState } from "react";

import BookList from "../components/BookList";
var _ = require("lodash");

const formatGoogleBook = ({ volumeInfo }) => {
  const {
    title = "",
    authors = [],
    description = "None",
    imageLinks = { smallThumbnail: "" },
    infoLink = "",
  } = volumeInfo;

  return {
    title,
    authors,
    description,
    image: imageLinks.smallThumbnail,
    link: infoLink,
  };
};

// https://lodash.com/

const Search = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  const onChange = (e) => setQuery(e.target.value);

  // TODO: onSavedClick -> save book to db

  const fetchBooks = () => {
    if (query !== "") {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then((result) => result.json())
        .then(({ items = [] }) => setBooks(items.map(formatGoogleBook)));
    }
  };

  useEffect(() => {
    // _.debounce(fetchBooks, 1000);
    fetchBooks();
  }, [query]);

  return (
    <>
      <h1>Search</h1>
      <input onChange={onChange} value={query} />
      <BookList books={books} />
    </>
  );
};

export default Search;
