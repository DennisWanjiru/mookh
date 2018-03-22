import React from 'react';

const NavBar = props => (
    <nav>
        <ul className="navbar container">
            <li className="navbar-item active"><a href="#">Featured</a></li>
            <li className="navbar-item"><a href="!#">Tickets</a></li>
            <li className="navbar-item"><a href="!#">Products</a></li>
            <li className="navbar-item"><a href="!#">Digital Content</a></li>
        </ul>
    </nav>
);

export default NavBar;