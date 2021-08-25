import { createSlice } from '@reduxjs/toolkit';
import { results } from '../utils/constants';

const initialState = {
  results: results.sort((a, b) => a.time - b.time),
};

const resultsSlice = createSlice({
  name: 'results',
  initialState: initialState,
  reducers: {
    addToResults(state, action) {
      state.results.push(action.payload);
      state.results.sort((a, b) => a.time - b.time);
    },
  },
});
export default resultsSlice.reducer;
export const { addToResults } = resultsSlice.actions;
