import React, { useEffect, useState } from "react";

import BookList from "../components/BookList";

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

  useEffect(() => {
    if (query !== "") {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then((result) => result.json())
        .then(({ items = [] }) => setBooks(items.map(formatGoogleBook)));
    }
  }, [query]);

  return (
    <>
      <h1>Search</h1>
      <input onChange={(e) => setQuery(e.target.value)}></input>
      <BookList books={books} />
    </>
  );
};

export default Search;
