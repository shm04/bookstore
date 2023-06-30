import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import BooksContainer from './components/booksContainer';
import Categories from './components/Categories';

const App = () => (
  <Router>
    <Menu />
    <Routes>
      <Route path="/" element={<BooksContainer />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </Router>
);

export default App;
