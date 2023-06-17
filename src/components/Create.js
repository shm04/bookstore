import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddBook = ({ onSubmit }) => {
  const [book, setBook] = useState({
    title: '',
    author: '',
  });

  const updateBook = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const addBook = (e) => {
    e.preventDefault();
    onSubmit(book);
    setBook({
      title: '',
      author: '',
    });
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={addBook}>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            id="title"
            name="title"
            value={book.title}
            onChange={updateBook}
          />
        </label>
        <label htmlFor="author">
          Author:
          <input
            type="text"
            id="author"
            name="author"
            value={book.author}
            onChange={updateBook}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

AddBook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddBook;
