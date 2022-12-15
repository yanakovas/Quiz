// Использование Redux без Redux Toolkit - считается устаревшей практикой
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import suggestionsReducer from './features/suggestions/reducer';
import authReducer from './features/auth/reducer';

const store = createStore(
  combineReducers({
    suggestions: suggestionsReducer,
    auth: authReducer,
  }),
  composeWithDevTools()
);

export default store;

// тип централизованного состояния
export type RootState = ReturnType<typeof store.getState>;
