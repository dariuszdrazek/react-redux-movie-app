import React from 'react';
import { Link, generatePath } from 'react-router-dom';
const Item = ({ movie: { Poster: poster, Title: title, imdbID: id } }) => {
     return (
          <li key={id}>
               <img src={poster} alt={title} />
               <Link to={generatePath('/details/:id', { id })}>Details</Link>
          </li>
     );
};

export default Item;
