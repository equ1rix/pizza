import { pizzas } from "../../helpers/mock";

import Card from "../card";

type PizzaCardsProps = {};

const PizzaCards = ({}: PizzaCardsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-items-center align-items-center gap-4 p-4 overflow-y-auto max-h-full">
      {pizzas.map((el) => {
        return (
          <div key={el.id} className="w-[280px] h-[450px]">
            <Card {...el} type="ADD" />
          </div>
        );
      })}
    </div>
  );
};

export default PizzaCards;
