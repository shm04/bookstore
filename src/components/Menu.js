import React from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/user.png';

const Menu = () => (
  <nav id="navbar">
    <h1>Bookstore CMS</h1>
    <ul id="menu">
      <li><Link to="/">Books</Link></li>
      <li><Link to="/categories">Categories</Link></li>
    </ul>
    <img alt="user" src={user} />
  </nav>
);

export default Menu;
