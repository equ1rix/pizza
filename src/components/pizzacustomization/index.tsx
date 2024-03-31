import React from "react";

import {
  Filter,
  doughTypeFilters,
  mock,
  pizzaSizeFilters,
} from "../../helpers";

import ElementCustomization from "../elementcustomization";

type PizzaCustomizationProps = {};

const PizzaCustomization = ({}: PizzaCustomizationProps) => {
  return (
    <div className="bg-customizationBG rounded-lg flex flex-col p-2">
      <ul className="flex mb-2">
        {doughTypeFilters.map((filter: Filter) => {
          return (
            <ElementCustomization
              text={filter.label}
              onClick={() => mock}
              isActive={false}
            />
          );
        })}
      </ul>
      <ul className="flex">
        {pizzaSizeFilters.map((filter: Filter) => {
          return (
            <ElementCustomization
              text={filter.label}
              onClick={() => mock}
              isActive={false}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default PizzaCustomization;
