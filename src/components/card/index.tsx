import React, { useState } from "react";

import { mock } from "../../helpers";

import PizzaCustomization from "../pizzacustomization";
import Button from "../button";
import { useDispatch } from "react-redux";
import { ADD_PIZZA } from "../../redux/actions";
import store from "../../redux/store";
import { useSelector } from "react-redux";

type CardProps = {
  id: number;
  prices?: {
    [type: string]: { [key: number]: number };
  };
  src?: string;
  name?: string;
  type?: string;
  onAdd?: (
    id: number,
    label: string,
    dough: string,
    size: number,
    price: number
  ) => void;
  openDetails?: () => void;
};

const Card = ({
  id,
  src = "",
  name = "",
  prices,
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
  const dispatch = useDispatch();

  const handleAddButtonClick = () => {
    dispatch({
      type: ADD_PIZZA,
      payload: {
        id,
        label: name,
        dough: doughType,
        size: pizzaSize,
        price: defaultPrice,
      },
    });
  };

  return (
    <div className="p-4 flex flex-col justify-center min-w-[260px] h-[426px]">
      <img
        src={src}
        alt={name}
        className="mb-2 mx-auto max-w-[230px] max-h-[230px]"
        onClick={openDetails}
      />
      <label className="text-black text-3xl font-bold flex items-center justify-center mb-4">
        {name}
      </label>
      <PizzaCustomization
        dough={doughType}
        size={pizzaSize}
        onChangeDough={setDough}
        onChangeSize={setSize}
      />

      <div className="flex justify-between m-2">
        <p className="text-black text-2xl font-semibold">{defaultPrice}$</p>
        <Button onClick={handleAddButtonClick} label="+ ADD" type={type} />
      </div>
    </div>
  );
};

export default Card;
