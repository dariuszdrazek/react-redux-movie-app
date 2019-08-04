import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink exact to='/' activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/search' activeClassName='active'>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to='/watched' activeClassName='active'>
            Watched
          </NavLink>
        </li>
        <li>
          <NavLink to='/to-watch' activeClassName='active'>
            ToWatch
          </NavLink>
        </li>
        <li>
          <NavLink to='/details' activeClassName='active'>
            Details
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
