import { v4 as uuidv4 } from "uuid";

import { mockData } from "../helpers";

import { ADD_PIZZA, REDUCER_NAME, REMOVE_PIZZA } from "./actions";
export { REDUCER_NAME };

export interface Pizza {
  idCart: number;
  id: number;
  label: string;
  src: string;
  dough: string;
  size: number;
  price: number;
  quantity: number;
  totalPrice: number;
}
export interface AppState {
  pizzas: Pizza[];
}
const initialState: AppState = {
  pizzas: mockData,
};

const pizzaReducer = (state = initialState, action: any): AppState => {
  switch (action.type) {
    case ADD_PIZZA:
      const existingPizzaIndex = state.pizzas.findIndex(
        (pizza) =>
          pizza.id === action.payload.id &&
          pizza.dough === action.payload.dough &&
          pizza.size === action.payload.size
      );

      if (existingPizzaIndex !== -1) {
        const updatedPizzas = [...state.pizzas];
        const existingPizza = updatedPizzas[existingPizzaIndex];
        existingPizza.quantity += 1;
        existingPizza.totalPrice += existingPizza.price;
        return {
          ...state,
          pizzas: updatedPizzas,
        };
      } else {
        const newPizza: Pizza = {
          ...action.payload,
          idCart: uuidv4(),
          quantity: 1,
          totalPrice: action.payload.price,
        };
        return {
          ...state,
          pizzas: [...state.pizzas, newPizza],
        };
      }
    case REMOVE_PIZZA:
      return {
        ...state,
        pizzas: state.pizzas.filter(
          (pizza) => pizza.idCart !== action.payload.idCart
        ),
      };
    default:
      return state;
  }
};

export default pizzaReducer;
