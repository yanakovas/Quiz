// Использование Redux без Redux Toolkit - считается устаревшей практикой
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import topicsReducer from "./features/quizes/reducer";
import authReducer from "./features/auth/reducer";

const store = createStore(
  combineReducers({
    quizes: topicsReducer,
    auth: authReducer,
  }),
  composeWithDevTools()
);

export default store;

// тип централизованного состояния копипаста
export type RootState = ReturnType<typeof store.getState>;
