import { combineReducers } from 'redux';
import { cardsReducer } from './cardsReducer';
import { timeReducer } from './timeReducer';

export const rootReducer = combineReducers({
  cards: cardsReducer,
  timer: timeReducer,
});
