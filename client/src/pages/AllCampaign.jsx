import React, { useState, useEffect } from "react";

import { DisplayCampaigns } from "../components";
import { useStateContext } from "../context";

import sea from "../assets/sea.png";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <>
      <div className="hero ">
        <div className="flex justify-center">
          <img src={sea} alt="" className="-z-10 absolute top-0" />
        </div>

        <h1 className="text-white flex justify-center text-8xl font-thin text-center Z-30 relative nanum mt-16">
          Projects that create an impact
        </h1>
      </div>

      <div className="px-10 mt-24">
        <DisplayCampaigns
          title="All Campaigns"
          isLoading={isLoading}
          campaigns={campaigns}
        />
      </div>
    </>
  );
};

export default Home;
