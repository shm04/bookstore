import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemId = nanoid();
    dispatch(addBook({
      itemId, title, author, category,
    }));

    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className="inputDiv">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          <input
            className="inputTitle"
            type="text"
            id="title"
            name="title"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label htmlFor="author">
          <input
            className="inputAuthor"
            type="text"
            id="author"
            name="author"
            placeholder="Book Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
        <label htmlFor="category">
          <select
            className="inputCategory"
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Category</option>
            <option value="Fiction">Fiction</option>
            <option value="Nonfiction">Nonfiction</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Mystery">Mystery</option>
          </select>
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
