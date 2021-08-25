import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pastTime: '0',
};

const timerSlice = createSlice({
  name: 'timer',
  initialState: initialState,
  reducers: {
    updataPastime(state, action) {
      state.pastTime = action.payload;
    },
  },
});
export default timerSlice.reducer;
export const { updataPastime } = timerSlice.actions;
