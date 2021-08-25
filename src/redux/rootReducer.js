import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cardsSlice from './cardsSlice';
import timerSlice from './timerSlice';
import appSlice from './appSlice';
import gameParamsSlice from './gameParamsSlice';
import resultsSlice from './resultsSlice';

export const rootReducer = combineReducers({
  cards: cardsSlice,
  app: appSlice,
  gameParams: gameParamsSlice,
  timer: timerSlice,
  results: resultsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
