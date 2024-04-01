import React from "react";

import CartElement from "../cartelement";
import { useSelector } from "react-redux";
import { selectPizza } from "../../redux/selector";

type CartProps = {};

const Cart = ({}: CartProps) => {
  const state = useSelector(selectPizza);
  return (
    <div>
      {state.map((el) => {
        return (
          <div key={el.id}>
            <CartElement {...el} />
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
