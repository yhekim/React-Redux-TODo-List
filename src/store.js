import { createStore, combineReducers } from "redux";
import { toDoReducer } from "./reducers/index";
const rootReducer = combineReducers({
  todos: toDoReducer
  //buraya reducer verilecek rootReducer verilen state konumundadır
});

export const store = createStore(rootReducer);
