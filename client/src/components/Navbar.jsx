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
          <a href="/" className="">
            <h1 className="ml-24 text-white text-lg font-semibold leading-[30.60px]">
              Product Name
            </h1>
          </a>
        </div>

        <div className="flex mr-24 items-center ">
          <a href="" className="">
            <h1 className="mx-5 text-white text-lg font-semibold leading-[30.60px]">
              CO2 Calculator
            </h1>
          </a>
          <a href="/all" className="">
            <h1 className="mx-5 text-white text-lg font-semibold leading-[30.60px]">
              Invest
            </h1>
          </a>

          <div className="ml-5 text-white text-lg font-semibold leading-[30.60px] flex justify-center">
            <button className="button px-4 py-2" btnType="button">
              <h3
                onClick={() => {
                  if (address) navigate("create-campaign");
                  else connect();
                }}
              >
                {address ? "Create a campaign" : "Connect"}
              </h3>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
