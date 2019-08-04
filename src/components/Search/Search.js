import React from "react";
import List from "./List";
const Search = ({ getMovies, movies }) => {
  const handleOnSubmit = e => {
    e.preventDefault();
    getMovies(e.target.search.value);
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input type="search" name="search" />
        <button>Search</button>
      </form>
      <List movies={movies} />
    </>
  );
};

export default Search;
