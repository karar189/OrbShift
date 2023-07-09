import React, { useState } from "react";
import Hero from "../components/Hero";
import Carbcal from "../components/Carbcal";

function Home() {
  return (
    <>
      <div className="Home">
        <div className="hero">
          <Hero />
        </div>

        <div className="carbcal">
          <Carbcal />
        </div>

        
      </div>
    </>
  );
}

export default Home;
