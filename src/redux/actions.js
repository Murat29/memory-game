import { START_GAME, UPDATA_PASTIME } from './types';

export function startGame(cardsArr) {
  return {
    type: START_GAME,
    payload: cardsArr,
  };
}

export function upDataPastime(time) {
  return {
    type: UPDATA_PASTIME,
    payload: time,
  };
}
