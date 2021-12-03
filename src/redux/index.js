import { createStore, combineReducers } from "redux";
import todoReducer from "./reducers/todoReducer";
import usersReducer from "./reducers/usersReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const redusers = combineReducers({
  todo: todoReducer,
  users: usersReducer,
});

const store = createStore(redusers, composeWithDevTools());

export default store;
