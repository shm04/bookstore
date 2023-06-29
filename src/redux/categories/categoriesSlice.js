import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    status: null,
  },
  reducers: {
    checkStatus: (state) => {
      if (state.categories.length === 0) {
        state.status = 'Under construction';
      }
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
