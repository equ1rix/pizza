import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectPizza } from "../../redux/selector";
import { mock } from "../../helpers";

import { LogoIcon } from "../../components/iconbuttons/icons";
import { CartIcon } from "../../components/iconbuttons/icons";
import Cart from "../../components/cart";
import Header from "../../components/header";
import Button from "../../components/button";

const Cartpage = () => {
  const state = useSelector(selectPizza);
  const quantity = state.reduce((total, pizza) => total + pizza.quantity, 0);
  const price = state.reduce((total, pizza) => total + pizza.totalPrice, 0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 p-4">
      <div className="max-w-[1450px] max-h-[800px] rounded-2xl bg-white overflow-hidden">
        <Header
          src={<LogoIcon />}
          openCart={mock}
          quantity={quantity}
          price={price}
        />
        <div className="flex p-4 place-items-center">
          <CartIcon width={40} height={40} fill="#000000" />
          <h2 className="text-black font-bold text-2xl ">CART</h2>
        </div>
        <div
          className="h-[500px] overflow-y-auto"
          style={{ maxHeight: `calc(100% - ${100}px)` }}
        >
          <Cart />
        </div>
        <div className="h-[60px] flex p-4 justify-between place-items-center">
          <Link to="/ ">
            <Button onClick={mock} label="<- Go Back" type="DISABLED" />
          </Link>
          <div className="flex place-items-center">
            <p className="m-3 text-black font-bold text-2xl">
              {price.toFixed(2)}$
            </p>
            <Button
              onClick={() => {
                alert("You don't have money))");
              }}
              label="Pay"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
