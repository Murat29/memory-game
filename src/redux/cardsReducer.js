import { emojiArray } from '../utils/constants';
import { DISABLE_CARDS, HIDE_CARDS, SHOW_CARD, UPDATA_CARDS } from './types';

const initState = {
  //Заполняем массив, что бы при первом рендере появлялись карточки
  cards: [...Array(emojiArray.length * 2)],
};

export const cardsReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATA_CARDS:
      return { ...initState, cards: action.payload };

    case SHOW_CARD:
      state.cards[action.payload].show = true;
      return { ...state, cards: [...state.cards] };

    case DISABLE_CARDS:
      action.payload.forEach((index) => (state.cards[index].disabled = true));
      return { ...state, cards: [...state.cards] };

    case HIDE_CARDS:
      action.payload.forEach((index) => (state.cards[index].show = false));
      return { ...state, cards: [...state.cards] };

    default:
      return state;
  }
};
