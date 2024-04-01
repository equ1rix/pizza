import { createStore, combineReducers } from "redux";
import pizzaReducer, { REDUCER_NAME as PIZZA_REDUCER_NAME } from "./reducer";

const rootReducer = combineReducers({
  [PIZZA_REDUCER_NAME]: pizzaReducer,
});

const store = createStore(rootReducer);

export default store;
