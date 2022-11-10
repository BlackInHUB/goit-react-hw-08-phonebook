import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
