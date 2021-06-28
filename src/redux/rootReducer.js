import { combineReducers } from 'redux';
import { cardsReducer } from './cardsReducer';
import { appReducer } from './appReducer';
import { gameParamsReducer } from './gameParamsReducer';
import { timerReducer } from './timerReducer';
import { resultsReducer } from './resultsReducer';

export const rootReducer = combineReducers({
  cards: cardsReducer,
  app: appReducer,
  gameParams: gameParamsReducer,
  timer: timerReducer,
  results: resultsReducer,
});
