import { START_GAME } from './types';

export function startGame(cardsArr) {
  return {
    type: START_GAME,
    payload: cardsArr,
  };
}
