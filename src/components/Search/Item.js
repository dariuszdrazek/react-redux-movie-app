import React from "react";

const Item = ({ movie: { Poster: poster, Title: title, imdbID: id } }) => {
  return (
    <li key={id}>
      <img src={poster} alt={title} />
    </li>
  );
};

export default Item;
