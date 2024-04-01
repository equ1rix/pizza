import React, { useState } from "react";

import { mock } from "../../helpers";

import PizzaCustomization from "../pizzacustomization";
import Button from "../button";

type CardProps = {
  prices?: {
    [type: string]: { [key: number]: number };
  };
  src?: string;
  alt?: string;
  label?: string;
  type?: string;
  onAdd?: () => void;
  openDetails?: () => void;
};

const Card = ({
  src = "",
  alt = "",
  label = "",
  prices,
  onAdd = mock,
  openDetails = mock,
  type = "",
}: CardProps) => {
  const [doughType, setDoughType] = useState<string>("thin");
  const [pizzaSize, setPizzaSize] = useState<number>(10);

  const setDough = (dough: string) => {
    setDoughType(dough);
  };

  const setSize = (size: number) => {
    setPizzaSize(size);
  };
  const defaultPrice = prices?.[doughType]?.[pizzaSize] || 0;

  return (
    <div className="p-4 flex flex-col justify-center min-w-[260px] h-[426px]">
      <img
        src={src}
        alt={alt}
        className="mb-2 mx-auto max-w-[230px] max-h-[230px]"
        onClick={openDetails}
      />
      <label className="text-black text-3xl font-bold flex items-center justify-center mb-4">
        {label}
      </label>
      <PizzaCustomization
        dough={doughType}
        size={pizzaSize}
        onChangeDough={setDough}
        onChangeSize={setSize}
      />

      <div className="flex justify-between m-2">
        <p className="text-black text-2xl font-semibold">{defaultPrice}$</p>
        <Button onClick={onAdd} label="+ ADD" type={type} />
      </div>
    </div>
  );
};

export default Card;
