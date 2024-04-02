import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { removePizza } from "../../redux/actions";
import { selectPizza } from "../../redux/selector";

import CartElement from "../cartelement";

type CartProps = {};

const Cart = ({}: CartProps) => {
  const state = useSelector(selectPizza);
  const dispatch = useDispatch();

  const handleRemovePizza = (idCart: number) => {
    dispatch(removePizza({ idCart }));
  };
  return (
    <div>
      {state.map((el) => {
        return (
          <div key={el.idCart}>
            <CartElement
              {...el}
              onDelete={() => {
                handleRemovePizza(el.idCart);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
