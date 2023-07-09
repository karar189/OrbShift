import React from "react";
import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components";
import { CampaignDetails, CreateCampaign, AllCampaign, Profile } from "./pages";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="">
      <div className="">
        {/* <Navbar /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<AllCampaign />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
