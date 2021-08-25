import { createSlice } from '@reduxjs/toolkit';
import { emojiArray } from '../utils/constants';

const initialState = {
  cards: [...Array(emojiArray.length * 2)],
  cardsDisabled: true,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState: initialState,
  reducers: {
    updataCards(state, action) {
      state.cards = action.payload;
    },
    showCard(state, action) {
      state.cards[action.payload].show = true;
    },
    hideCards(state, action) {
      action.payload.forEach((index) => (state.cards[index].show = false));
    },
    disableAllCards(state) {
      state.cardsDisabled = true;
    },
    enableAllCards(state) {
      state.cardsDisabled = false;
    },
  },
});
export default cardsSlice.reducer;
export const { updataCards, showCard, hideCards, disableAllCards, enableAllCards } =
  cardsSlice.actions;
