import { emojiArray } from '../utils/constants';
import {
  DISABLE_ALL_CARDS,
  DISABLE_CARDS,
  ENABLE_ALL_CARDS,
  HIDE_CARDS,
  INCREASE_NUMBER_MATCHES,
  SHOW_CARD,
  START_GAME,
  UPDATA_VERIFIABLE_CARD,
} from './types';

const initState = {
  //Заполняем массив, что бы при первом рендере появлялись карточки
  cards: [...Array(emojiArray.length * 2)],
  verifiableСard: null,
  numberMatches: 0,
  disabled: true,
};

export const cardsReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREASE_NUMBER_MATCHES:
      return { ...state, numberMatches: (state.numberMatches += 1) };

    case START_GAME:
      return { ...initState, cards: action.payload, disabled: false };

    case UPDATA_VERIFIABLE_CARD:
      return { ...state, verifiableСard: action.payload };

    case SHOW_CARD:
      state.cards[action.payload].show = true;
      return { ...state, cards: [...state.cards] };

    case DISABLE_CARDS:
      const [i, j] = action.payload;
      state.cards[i].disabled = true;
      state.cards[j].disabled = true;
      return { ...state, cards: [...state.cards] };

    case DISABLE_ALL_CARDS:
      return { ...state, disabled: true };

    case ENABLE_ALL_CARDS:
      return { ...state, disabled: false };

    case HIDE_CARDS:
      const [k, l] = action.payload;
      state.cards[k].show = false;
      state.cards[l].show = false;
      return { ...state, cards: [...state.cards] };

    default:
      return state;
  }
};
