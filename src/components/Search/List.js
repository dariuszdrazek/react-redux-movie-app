import React from "react";
import Item from "./Item";
const List = ({ movies }) => {
  return (
    <ul className="list">
      {movies.map(movie => (
        <Item movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default List;
