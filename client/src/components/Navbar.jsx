import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useStateContext } from "../context";

const Navbar = () => {
  const navigate = useNavigate();
  const { connect, address } = useStateContext();

  return (
    <>
      <div className="flex justify-between text-white mt-10">
        <div className="flex items-center">
          <a href="" className="">
            <h1 className="ml-24 ">Product Name</h1>
          </a>
        </div>

        <div className="flex mr-24 items-center ">
          <a href="" className="">
            <h1 className="mx-10">CO2 Calculator</h1>
          </a>
          <a href="" className="">
            <h1 className="mx-10">Invest</h1>
          </a>

          <div className="ml-10 flex justify-center">
            <button className="button px-4 py-2" btnType="button">
              <a href="" className="">
                <h3 title={address ? "Create a campaign" : "Connect"}
                  styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
                  handleClick=
                  {() => {
                    if (address) navigate("create-campaign");
                    else connect();
                  }}  >
                  Connect
                </h3>
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
