import { emojiArray } from '../utils/constants';
import { START_GAME } from './types';

const initState = {
  //Заполняем массив, что бы при первом рендере появлялись карточки
  cards: [...Array(emojiArray.length * 2)],
  verifiableСards: [],
  numberOfCoincidences: 0,
  disabled: true,
};

export const cardsReducer = (state = initState, action) => {
  switch (action.type) {
    case START_GAME:
      return { ...state, cards: action.payload, disabled: false };

    default:
      return state;
  }
};
