import { UPDATA_PASTIME } from './types';

const initState = {
  pastTime: '0',
};

export const timerReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATA_PASTIME:
      return { ...state, pastTime: action.payload };

    default:
      return state;
  }
};
