import React from "react";

const Navbar = () => {
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
            <button className="button px-4 py-2">
              <a href="" className="">
                <h3>Connect Wallet</h3>
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
