import { UPDATA_PASTIME, DISABLE_ALL_CARDS, ENABLE_ALL_CARDS } from './types';

const initState = {
  pastTime: '0',
  disabledCards: true,
};

export const appReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATA_PASTIME:
      return { ...state, pastTime: action.payload };

    case DISABLE_ALL_CARDS:
      return { ...state, disabled: true };

    case ENABLE_ALL_CARDS:
      return { ...state, disabled: false };

    default:
      return state;
  }
};
