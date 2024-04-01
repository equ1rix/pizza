export const REDUCER_NAME = "PIZZA";
export const ADD_PIZZA = `${REDUCER_NAME}ADD_PIZZA`;

export const addPizza = ({
  id,
  label,
  dough,
  size,
  price,
}: {
  id: number;
  label: string;
  dough: string;
  size: number;
  price: number;
}) => ({
  type: ADD_PIZZA,
  payload: {
    id,
    label,
    dough,
    size,
    price,
  },
});
