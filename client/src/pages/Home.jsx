import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Carbcal from "../components/Carbcal";
import { useStateContext } from "../context/index";
import FundCard from "../components/FundCard";

function Home() {
  const { getUserCampaigns } = useStateContext();
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      const userCampaigns = await getUserCampaigns();
      setCampaigns(userCampaigns);
    };

    fetchCampaigns();
  }, []);

  return (
    <>
      <div className="Home">
        <div className="hero">
          <Hero />
        </div>

        <div className="carbcal">
          <Carbcal />
        </div>

        {/* project section */}
        <div className="text-center text-white text-[40px] font-medium leading-[48px] mt-20">
          Featured Projects
        </div>
        <div className="flex justify-center mt-10">
          {campaigns.map((campaign) => (
            <FundCard
              key={campaign.pId}
              owner={campaign.owner}
              title={campaign.title}
              description={campaign.description}
              target={campaign.target}
              deadline={campaign.deadline}
              amountCollected={campaign.amountCollected}
              image={campaign.image}
              handleClick={() => {}}
            />
          ))}
        </div>

        <footer className="footer footer-center bg-slate-800 bg-base-300 text-base-content py-2">
          <div className="flex justify-center text-slate-300">
            <p>Copyright © 2023 - Made for Hack4Bengal by HiveeZ</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
