import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, onDelete }) => {
  const removeBook = () => {
    onDelete(book.id);
  };

  return (
    <div>
      <h2>{book.title}</h2>
      <p>
        Author:
        {' '}
        {book.author}
      </p>
      <button type="button" onClick={removeBook}>
        Delete Book
      </button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
