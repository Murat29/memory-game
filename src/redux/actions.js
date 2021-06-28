import {
  ADD_TO_RESULTS,
  CLOSE_RESULT_POPUP,
  CLOSE_WIN_POPUP,
  DISABLE_ALL_CARDS,
  DISABLE_CARDS,
  ENABLE_ALL_CARDS,
  HIDE_CARDS,
  INCREASE_NUMBER_MATCHES,
  OPEN_RESULT_POPUP,
  OPEN_WIN_POPUP,
  SHOW_CARD,
  UPDATA_CARDS,
  UPDATA_PASTIME,
  UPDATA_VERIFIABLE_CARD,
} from './types';

export function updataCards(cardsArr) {
  return {
    type: UPDATA_CARDS,
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

export function disableCards(...arg) {
  return {
    type: DISABLE_CARDS,
    payload: arg,
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

export function hideCards(...arg) {
  return {
    type: HIDE_CARDS,
    payload: arg,
  };
}

export function increaseNumberMatches() {
  return {
    type: INCREASE_NUMBER_MATCHES,
  };
}

export function addToResults(item) {
  return {
    type: ADD_TO_RESULTS,
    payload: item,
  };
}

export function openResultPopup() {
  return {
    type: OPEN_RESULT_POPUP,
  };
}
export function closeResultPopup() {
  return {
    type: CLOSE_RESULT_POPUP,
  };
}
export function openWinPopup() {
  return {
    type: OPEN_WIN_POPUP,
  };
}
export function closeWinPopup() {
  return {
    type: CLOSE_WIN_POPUP,
  };
}
