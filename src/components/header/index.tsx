import React from "react";

import CartIcon from "../icons/cartIcon";

import { mock } from "../../helpers";
import Button from "../button";

type HeaderProps = {
  openCart: () => void;
  alt?: string;
  src: string;
  price?: number;
  quantity?: number;
};

const Header = ({
  src = "",
  alt = "logo",
  openCart = mock,
  price = 0,
  quantity = 0,
}: HeaderProps) => {
  return (
    <div className="flex w-[100%] h-[100px] border-b border-gray border-2 justify-between place-items-center p-4">
      <div className="flex">
        <img src={src} alt={alt} className="w-[70px] h-[70px] mr-3" />
        <div className="flex flex-col">
          <h1 className="text-black font-medium text-2xl">React Pizza</h1>
          <h2 className="text-lg text-gray-500">
            the most delicious pizza in the universe
          </h2>
        </div>
      </div>

      <Button
        label={
          <div className="flex items-center space-x-1">
            <span>{price}$ |</span>
            <CartIcon />
            <span>{quantity}</span>
          </div>
        }
        onClick={openCart}
      />
    </div>
  );
};

export default Header;
