import React from "react";

import {
  Filter,
  doughTypeFilters,
  mock,
  pizzaSizeFilters,
} from "../../helpers";

import ElementCustomization from "../elementcustomization";

type PizzaCustomizationProps = {
  onChangeDough: (dough: string) => void;
  onChangeSize: (size: number) => void;
  dough: string;
  size: number;
};

const PizzaCustomization = ({
  dough,
  size,
  onChangeDough = mock,
  onChangeSize = mock,
}: PizzaCustomizationProps) => {
  return (
    <div className="bg-customizationBG rounded-lg flex flex-col p-2">
      <ul className="flex mb-2">
        {doughTypeFilters.map((filter: Filter) => {
          return (
            <ElementCustomization
              key={filter.id}
              id={filter.id}
              label={filter.label}
              onClick={() => onChangeDough(filter.label)}
              isActive={filter.label == dough}
            />
          );
        })}
      </ul>
      <ul className="flex">
        {pizzaSizeFilters.map((filter: Filter) => {
          return (
            <ElementCustomization
              key={filter.id}
              id={filter.id}
              label={filter.label}
              onClick={() => onChangeSize(filter.id)}
              isActive={filter.id == size}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default PizzaCustomization;
