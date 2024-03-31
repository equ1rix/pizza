import React from "react";

import { mock } from "../../helpers";

type ElementCustomizationProps = {
  id?: number;
  text: string;
  onClick: () => void;
  isActive: boolean;
};

const ElementCustomization = ({
  text = "",
  onClick = mock,
  isActive = false,
}: ElementCustomizationProps) => {
  const elementStyle = isActive
    ? "bg-white min-w-[75px] h-[35px] rounded-lg flex-grow flex items-center justify-center text-base"
    : "min-w-[75px] flex-grow flex items-center justify-center text-base";
  return (
    <li className={elementStyle} onClick={onClick}>
      {text}
    </li>
  );
};

export default ElementCustomization;
