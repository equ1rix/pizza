import { ADD_PIZZA, REDUCER_NAME } from "./actions";

export { REDUCER_NAME };

export interface Pizza {
  id: number;
  label: string;
  dough: string;
  size: number;
  price: number;
}
export interface AppState {
  pizzas: Pizza[];
}
const initialState: AppState = {
  pizzas: [],
};

const pizzaReducer = (state = initialState, action: any): AppState => {
  switch (action.type) {
    case ADD_PIZZA:
      return {
        ...state,
        pizzas: [...state.pizzas, action.payload], // Объединяем новую пиццу с текущим массивом пицц
      };
    default:
      return state;
  }
};

export default pizzaReducer;
