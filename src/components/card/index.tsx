import React from "react";

import { mock } from "../../helpers";

import PizzaCustomization from "../pizzacustomization";
import Button from "../button";

type CardProps = {
  price?: number;
  src?: string;
  alt?: string;
  label?: string;
  onAdd?: () => void;
  openDetails?: () => void;
};

const Card = ({
  src = "",
  alt = "",
  label = "",
  price = 0,
  onAdd = mock,
  openDetails = mock,
}: CardProps) => {
  return (
    <div className="p-4 flex flex-col justify-center min-w-[260px] ">
      <img src={src} alt={alt} className="mb-2 mx-auto" onClick={openDetails} />
      <label className="text-black text-3xl font-bold flex items-center justify-center mb-4">
        {label}
      </label>
      <PizzaCustomization />
      <div className="flex justify-between m-2">
        <p className="text-black text-2xl font-semibold">{price}$</p>
        <Button onClick={onAdd} label="+ ADD" />
      </div>
    </div>
  );
};

export default Card;
