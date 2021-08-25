import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenResultPopup: false,
  isOpenWinPopup: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    openResultPopup(state) {
      state.isOpenResultPopup = true;
    },
    closeResultPopup(state) {
      state.isOpenResultPopup = false;
    },
    openWinPopup(state) {
      state.isOpenWinPopup = true;
    },
    closeWinPopup(state) {
      state.isOpenWinPopup = false;
    },
  },
});
export default appSlice.reducer;
export const { openResultPopup, closeResultPopup, openWinPopup, closeWinPopup } = appSlice.actions;
