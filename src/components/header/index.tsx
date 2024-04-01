import React, { ReactNode } from "react";

import CartIcon from "../icons/cartIcon";

import { mock } from "../../helpers";
import Button from "../button";

type HeaderProps = {
  openCart: () => void;
  src: ReactNode;
  price?: number;
  quantity?: number;
};

const Header = ({
  openCart = mock,
  price = 0,
  quantity = 0,
  src,
}: HeaderProps) => {
  return (
    <div className="flex w-[100%] h-[100px] border-b border-gray-200 justify-between place-items-center p-4">
      <div className="flex">
        {src}
        <div className="flex flex-col ml-3">
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
