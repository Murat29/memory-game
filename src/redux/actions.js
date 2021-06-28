import {
  DISABLE_ALL_CARDS,
  DISABLE_CARDS,
  ENABLE_ALL_CARDS,
  HIDE_CARDS,
  INCREASE_NUMBER_MATCHES,
  SHOW_CARD,
  START_GAME,
  UPDATA_PASTIME,
  UPDATA_VERIFIABLE_CARD,
} from './types';

export function startGame(cardsArr) {
  return {
    type: START_GAME,
    payload: cardsArr,
  };
}

export function updataPastime(time) {
  return {
    type: UPDATA_PASTIME,
    payload: time,
  };
}

export function updataVerifiableCard(dataCard) {
  return {
    type: UPDATA_VERIFIABLE_CARD,
    payload: dataCard,
  };
}

export function showCards(index) {
  return {
    type: SHOW_CARD,
    payload: index,
  };
}

export function disableCards(i, j) {
  return {
    type: DISABLE_CARDS,
    payload: [i, j],
  };
}

export function disableAllCards() {
  return {
    type: DISABLE_ALL_CARDS,
  };
}

export function enableAllCards() {
  return {
    type: ENABLE_ALL_CARDS,
  };
}

export function hideCards(i, j) {
  return {
    type: HIDE_CARDS,
    payload: [i, j],
  };
}

export function increaseNumberMatches() {
  return {
    type: INCREASE_NUMBER_MATCHES,
  };
}
