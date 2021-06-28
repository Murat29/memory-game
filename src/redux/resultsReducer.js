import { results } from '../utils/constants';
import { ADD_TO_RESULTS } from './types';

const initState = {
  results: results.sort((a, b) => a.time - b.time),
};

export const resultsReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_RESULTS:
      return {
        ...state,
        // Если  массив results будет очень большой,
        // нужно будет вставлять новый элемент по другому (например бинарным поиском)
        results: [...state.results, action.payload].sort((a, b) => a.time - b.time),
      };

    default:
      return state;
  }
};
