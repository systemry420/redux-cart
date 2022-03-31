import React from "react";
import Count from "./Count";
import Minus from "./Minus";
import Plus from "./Plus";
import Reset from "./Reset";

const CounterContainer = ({ count }) => {
  return (
    <div className="cart">
      <h1>Counter Container</h1>
      <div className="cart-item">
        <Minus />
        <Count />
        <Plus />
      </div>
      <Reset />
    </div>
  );
};

export default CounterContainer
