import React from "react";

import { pizzas } from "../../helpers/mock";
import Card from "../card";

const PizzaCards = ({}) => {
  return (
    <div className="flex flex-wrap justify-start">
      {pizzas.map((el) => {
        return (
          <div className="w-[280px]">
            <Card
              key={el.id}
              src={el.src}
              alt={el.name}
              label={el.name}
              type="ADD"
            />
          </div>
        );
      })}
    </div>
  );
};

export default PizzaCards;
