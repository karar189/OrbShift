import React from "react";
import Navbar from "../components/Navbar";
import earth from "../assets/earthbg.png";

const Hero = () => {
  return (
    <>
      <div className="text-white">
        <div className="hero-sec">
          <div className="flex justify-center mt-32">
            <img src={earth} alt="" className="w-2/3 -z-10 absolute" />
          </div>

          <div className="hero-txt flex justify-center text-8xl font-thin text-center Z-30 relative nanum pt-16">
            The coolest way to cool the <br /> planet
          </div>

          <div className="sub-hero relative ">
            <h2 className="flex justify-center mt-16 text-xl">
              Calculate your carbon footprint and invest in projects that work
              for achieving a carbon neutral earth
            </h2>
          </div>
        </div>

        <div className="flex justify-center mt-16 ">
          <button className="button relative px-8 py-4">
            <a href="/all" className="">
              View Projects
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
