import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Books from './components/Books';
import Categories from './components/Categories';

const App = () => (
  <Router>
    <Menu />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </Router>
);

export default App;
