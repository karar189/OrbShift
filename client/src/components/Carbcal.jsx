import React, { useState } from "react";
import electbtn from "../assets/Elecbtn.svg";
import vehibtn from "../assets/Vehibtn.svg";
import flightbtn from "../assets/flightbtn.svg";
import Elec from "../components/Electricity";
import Cars from "../components/Cars";

function Carbcal() {
  const Component1 = () => {
    return (
      <div className="flex justify-center">
        <Elec />
      </div>
    );
  };

  const Component2 = () => {
    return (
      <div className="flex justify-center">
        <Cars />
      </div>
    );
  };

  const Component3 = () => {
    return (
      <div className="flex justify-center">
        <h1>Component 3</h1>
      </div>
    );
  };

  const [activeTab, setActiveTab] = useState(() => Component1);

  const handleClick = (component) => {
    setActiveTab(() => component);
  };

  return (
    <>
      <div className="heading flex justify-center mt-40">
        <h1 className="text-4xl text-white">Calculate your Co2 footprint</h1>
      </div>

      <div className="flex justify-center mt-16">
        <img
          className="mx-5"
          src={electbtn}
          onClick={() => handleClick(Component1)}
        />
        <img
          className="mx-5"
          src={vehibtn}
          onClick={() => handleClick(Component2)}
        />
        <img
          className="mx-5"
          src={flightbtn}
          onClick={() => handleClick(Component3)}
        />
      </div>

      <div className="mt-4">{activeTab && activeTab()}</div>
    </>
  );
}

export default Carbcal;
