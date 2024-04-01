import React from "react";

import Header from "../../components/header";
import PizzaCards from "../../components/pizzacards";
import LogoIcon from "../../components/icons/logoIcon";
import { mock } from "../../helpers";
import { useSelector } from "react-redux";
import { selectPizza } from "../../redux/selector";

const Homepage = () => {
  const state = useSelector(selectPizza);
  const quantity = state.length;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 p-4">
      <div className="max-w-[1450px] h-[800px] rounded-2xl bg-white overflow-hidden">
        <Header src={<LogoIcon />} openCart={mock} quantity={quantity} />
        <div
          className="h-screen overflow-y-auto"
          style={{ maxHeight: `calc(100% - ${100}px)` }}
        >
          <PizzaCards />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
