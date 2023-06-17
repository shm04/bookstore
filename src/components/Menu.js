import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <nav id="navbar">
    <h1>Bookstore CMS</h1>
    <ul id="menu">
      <li><Link to="/">Books</Link></li>
      <li><Link to="/categories">Categories</Link></li>
    </ul>
  </nav>
);

export default Menu;
