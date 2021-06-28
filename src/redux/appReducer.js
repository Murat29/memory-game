import {
  CLOSE_RESULT_POPUP,
  CLOSE_WIN_POPUP,
  DISABLE_ALL_CARDS,
  ENABLE_ALL_CARDS,
  OPEN_RESULT_POPUP,
  OPEN_WIN_POPUP,
} from './types';

const initState = {
  disabledCards: true,
  isOpenResultPopup: false,
  isOpenWinPopup: false,
};

export const appReducer = (state = initState, action) => {
  switch (action.type) {
    case DISABLE_ALL_CARDS:
      return { ...state, disabledCards: true };

    case ENABLE_ALL_CARDS:
      return { ...state, disabledCards: false };

    case OPEN_RESULT_POPUP:
      return { ...state, isOpenResultPopup: true };

    case CLOSE_RESULT_POPUP:
      return { ...state, isOpenResultPopup: false };

    case OPEN_WIN_POPUP:
      return { ...state, isOpenWinPopup: true };

    case CLOSE_WIN_POPUP:
      return { ...state, isOpenWinPopup: false };

    default:
      return state;
  }
};
