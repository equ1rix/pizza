export const REDUCER_NAME = "PIZZA";
export const ADD_PIZZA = `${REDUCER_NAME}ADD_PIZZA`;

export const addPizza = ({
  id,
  label,
  src,
  dough,
  size,
  price,
}: {
  id: number;
  label: string;
  src: string;
  dough: string;
  size: number;
  price: number;
}) => ({
  type: ADD_PIZZA,
  payload: {
    id,
    label,
    src,
    dough,
    size,
    price,
  },
});
