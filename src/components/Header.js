import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <ul>
            <li>
                <NavLink to='/'> Home </NavLink>
            </li>
            <li>
                <NavLink to='/search'> Search </NavLink>
            </li>
            <li>
                <NavLink to='/watched'> Watched </NavLink>
            </li>    
            <li>
                <NavLink to='/to-watch'> ToWatch </NavLink>
            </li> 
            <li>
                <NavLink to='/details'> Details </NavLink>
            </li> 
        </ul>
        );
};

export default Header;
