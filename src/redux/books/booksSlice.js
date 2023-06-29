import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((item) => item.id !== bookId);
    },
    addBook: (state, action) => {
      const bookId = action.payload;
      const { books } = state;
      books.push({
        id: bookId,
      });
      state.books = books;
    },
  },
});

export const { removeItem, addBook } = booksSlice.actions;

export default booksSlice.reducer;
