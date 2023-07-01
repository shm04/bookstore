import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const API_BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const KEY = '7u3HEQWYdcjxX54hw874';
const FETCH_BOOKS = 'books/fetchBooks';
const ADD_BOOKS = 'books/addBook';
const REMOVE_BOOK = 'books/removeBook';

export const fetchBooks = createAsyncThunk(FETCH_BOOKS, async () => {
  const res = await axios.get(`${API_BASE_URL}/apps/${KEY}/books`);
  const booksArray = Object.entries(res.data).map(([id, info]) => ({
    id,
    ...info[0],
  }));

  // Save the books in localStorage
  localStorage.setItem('books', JSON.stringify(booksArray));

  return booksArray;
});

export const addBook = createAsyncThunk(ADD_BOOKS, async (bookData) => {
  const bookId = uuidv4();

  const {
    title,
    author,
    category,
  } = bookData;

  await axios.post(`${API_BASE_URL}/apps/${KEY}/books`, {
    item_id: bookId,
    title,
    author,
    category: category || '',
  });

  const newBook = {
    itemId: bookId,
    title,
    author,
    category: category || '',
  };

  return newBook;
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (bookId) => {
  await axios.delete(`${API_BASE_URL}/apps/${KEY}/books/${bookId}`);
  return bookId;
});

// Get the books from localStorage if available, otherwise use an empty array as the initial state
const initialState = JSON.parse(localStorage.getItem('books')) || [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.length = 0;
        action.payload.forEach((book) => state.push(book));
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.push(action.payload);
        localStorage.setItem('books', JSON.stringify(state));
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const id = action.payload;
        const updatedState = state.filter((book) => book.itemId !== id);
        localStorage.setItem('books', JSON.stringify(updatedState));
        return updatedState;
      });
  },
});

export default booksSlice.reducer;
