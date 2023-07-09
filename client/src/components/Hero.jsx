import React from "react";
import Nav from "../components/Navbar";
import earth from "../assets/earthbg.png";
import earthmoji from "../assets/earthmoji.svg";

const Hero = () => {
  return (
    <>
      <div className="text-white">
        <Nav />

        <div className="hero-sec">
          <div className="flex justify-center mt-36">
            <img src={earth} alt="" className="w-2/3 absolute" />
          </div>

          <div className="hero-txt flex justify-center text-7xl text-center Z-30 relative ">
            The coolest way to cool <br />
            the planet
            {/* <img src={earthmoji} alt="" className="" /> */}
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
