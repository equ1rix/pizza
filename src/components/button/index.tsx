import React from "react";

import { mock } from "../../helpers";

export const BUTTON_TYPE = {
  CART: "CART",
  ADD: "ADD",
  DISABLED: "DISABLED",
};

type ButtonType = (typeof BUTTON_TYPE)[keyof typeof BUTTON_TYPE];

const BUTTON_STYLE: Record<ButtonType, string> = {
  CART: "bg-main rounded-full text-white text-xl font-semibold py-2 px-4 ",
  ADD: "rounded-full text-main border border-main border-2 font-semibold text-lg py-2 px-4 ",
  DISABLED:
    "rounded-full text-slate-500 border border-gray border-2 font-semibold text-lg py-2 px-4 ",
};

type ButtonProps = {
  onClick: () => void;
  label?: any;
  type?: ButtonType;
  isDisabled?: boolean;
};

const Button = ({
  onClick = mock,
  label = "",
  type = BUTTON_TYPE.CART,
  isDisabled = false,
}: ButtonProps) => {
  const buttonStyle = isDisabled ? BUTTON_STYLE.DISABLED : BUTTON_STYLE[type];
  return (
    <button className={buttonStyle} disabled={isDisabled} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
