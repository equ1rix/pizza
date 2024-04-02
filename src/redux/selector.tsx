import { createSelector } from "reselect";

import { REDUCER_NAME } from "./actions";
import { AppState } from "./reducer";

const selectPizzaState = (state: { [REDUCER_NAME: string]: AppState }) =>
  state[REDUCER_NAME];

export const selectPizza = createSelector(
  [selectPizzaState],
  (pizzaState) => pizzaState.pizzas
);
export default selectPizzaState;
