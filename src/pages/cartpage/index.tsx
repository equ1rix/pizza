import React from "react";

import Header from "../../components/header";
import LogoIcon from "../../components/icons/logoIcon";
import { mock } from "../../helpers";
import { useSelector } from "react-redux";
import { selectPizza } from "../../redux/selector";
import Cart from "../../components/cart";
import CartIcon from "../../components/icons/cartIcon";
import Button from "../../components/button";

const Cartpage = () => {
  const state = useSelector(selectPizza);
  const quantity = state.length;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 p-4">
      <div className="max-w-[1450px] max-h-[800px] rounded-2xl bg-white overflow-hidden">
        <Header src={<LogoIcon />} openCart={mock} quantity={quantity} />
        <div className="flex p-4 place-items-center">
          <CartIcon width={40} height={40} fill="#000000" />
          <h2 className="text-black font-bold text-2xl ">CART</h2>
        </div>
        <div
          className=" overflow-y-auto"
          style={{ maxHeight: `calc(100% - ${100}px)` }}
        >
          <Cart />
        </div>
        <div className="h-[50px] flex p-4 justify-end place-items-center">
          <Button onClick={mock} label="Go back" />
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
