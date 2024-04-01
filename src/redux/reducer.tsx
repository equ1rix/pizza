import { mockData } from "../helpers/mock";
import { ADD_PIZZA, REDUCER_NAME, REMOVE_PIZZA } from "./actions";
import { v4 as uuidv4 } from "uuid";
export { REDUCER_NAME };

export interface Pizza {
  idCart: number;
  id: number;
  label: string;
  src: string;
  dough: string;
  size: number;
  price: number;
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
      const newPizza: Pizza = {
        ...action.payload,
        idCart: uuidv4(),
      };
      return {
        ...state,
        pizzas: [...state.pizzas, newPizza],
      };
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
