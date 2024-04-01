import React from "react";

import CartElement from "../cartelement";
import { useSelector } from "react-redux";
import { selectPizza } from "../../redux/selector";
import { useDispatch } from "react-redux";
import { removePizza } from "../../redux/actions";

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
