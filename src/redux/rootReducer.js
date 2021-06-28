import { combineReducers } from 'redux';
import { cardsReducer } from './cardsReducer';
import { appReducer } from './appReducer';
import { gameParamsReducer } from './gameParamsReducer';

export const rootReducer = combineReducers({
  cards: cardsReducer,
  app: appReducer,
  gameParams: gameParamsReducer,
});
