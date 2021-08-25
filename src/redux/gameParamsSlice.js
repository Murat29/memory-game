import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  verifiableСard: null,
  numberMatches: 0,
};

const gameParamsSlice = createSlice({
  name: 'gameParams',
  initialState: initialState,
  reducers: {
    increaseNumberMatches(state) {
      state.numberMatches++;
    },
    updataVerifiableCard(state, action) {
      state.verifiableСard = action.payload;
    },
    cleareGameParams(state) {
      state.verifiableСard = null;
      state.numberMatches = 0;
    },
  },
});
export default gameParamsSlice.reducer;
export const { increaseNumberMatches, updataVerifiableCard, cleareGameParams } =
  gameParamsSlice.actions;
