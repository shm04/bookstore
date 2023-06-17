import React, { useState } from 'react';
import BookList from './List';
import AddBook from './Create';

const Books = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Harry Potter',
      author: 'J.K Rowling',
    },
  ]);

  const addBook = (book) => {
    const newBook = { ...book, id: Date.now() };
    setBooks([...books, newBook]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <BookList books={books} onDelete={removeBook} />
      <AddBook onSubmit={addBook} />
    </div>
  );
};

export default Books;
