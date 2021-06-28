import { INCREASE_NUMBER_MATCHES, UPDATA_VERIFIABLE_CARD } from './types';

const initState = {
  verifiableСard: null,
  numberMatches: 0,
};

export const gameParamsReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREASE_NUMBER_MATCHES:
      return { ...state, numberMatches: (state.numberMatches += 1) };

    case UPDATA_VERIFIABLE_CARD:
      return { ...state, verifiableСard: action.payload };

    default:
      return state;
  }
};
