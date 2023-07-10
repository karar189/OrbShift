import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import backers from "../assets/backers.svg";
import calendar from "../assets/calendar.svg";
import bag from "../assets/bag.svg";
import { useStateContext } from "../context";
import { CountBox, CustomButton, Loader } from "../components";
import { calculateBarPercentage, daysLeft } from "../utils";
import { thirdweb } from "../assets";
import user from "../assets/user.svg";

const CampaignDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { donate, getDonations, contract, address } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [donators, setDonators] = useState([]);

  const remainingDays = daysLeft(state.deadline);

  const fetchDonators = async () => {
    const data = await getDonations(state.pId);

    setDonators(data);
  };

  useEffect(() => {
    if (contract) fetchDonators();
  }, [contract, address]);

  const handleDonate = async () => {
    setIsLoading(true);

    await donate(state.pId, amount);

    navigate("/");
    setIsLoading(false);
  };

  return (
    <>
      <div className="px-24 mt-24 mb-32 text-white">
        {isLoading && <Loader />}

        <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
          <div className="flex-1 flex-col">
            <img
              src={state.image}
              alt="campaign"
              className="w-full h-[410px] object-cover rounded-xl"
            />
            <div className="relative w-full h-[5px]  mt-2">
              <div
                className="absolute h-full "
                style={{
                  width: `${calculateBarPercentage(
                    state.target,
                    state.amountCollected
                  )}%`,
                  maxWidth: "100%",
                }}
              ></div>
            </div>
          </div>

          <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px] ml-8">
            <div className="">
              <img src={backers} alt="" className="" />
              <CountBox title="Days Left" value={remainingDays} />
            </div>

            <div className="">
              <img src={bag} alt="" className="" />
              <CountBox
                title={`Raised of ${state.target}`}
                value={state.amountCollected}
              />
            </div>

            <div>
              <img src={calendar} alt="" className="" />
              <CountBox title="Total Backers" value={donators.length} />
            </div>
          </div>
        </div>

        <div className="mt-[60px] flex lg:flex-row flex-col gap-5 ">
          <div className="flex-[2] flex flex-col gap-[40px]">
            <div>
              <h4 className="text-white text-[40px] font-semibold leading-[68px]">
                Creator
              </h4>

              <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
                <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full  cursor-pointer">
                  <img
                    src={user}
                    alt="user"
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-gray-200 text-lg font-semibold leading-snug">
                    {state.owner}
                  </h4>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white text-[32px] font-semibold leading-[54.40px] ">
                Project objective
              </h4>

              <div className="mt-[20px]">
                <p className="pr-24 text-gray-200 text-lg font-semibold leading-[27px] text-justify">
                  {state.description}
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-white text-[32px] font-semibold leading-[54.40px]">
                Donators
              </h4>

              <div className="text-gray-200 text-lg font-semibold leading-[27px] gap-4">
                {donators.length > 0 ? (
                  donators.map((item, index) => (
                    <div
                      key={`${item.donator}-${index}`}
                      className="flex justify-between items-center gap-4"
                    >
                      <p className="font-epilogue font-normal text-[16px] leading-[26px] break-ll">
                        {index + 1}. {item.donator}
                      </p>
                      <p className="font-epilogue pr-20 font-normal text-[16px]  leading-[26px] break-ll">
                        {item.donation}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="font-epilogue font-normal text-[16px]  leading-[26px] text-justify">
                    No donators yet. Be the first one!
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="">
            <h4 className="text-white text-[40px] font-semibold leading-[68px]">
              Fund
            </h4>

            <div className="flex-1 crowdcard px-8 pb-8">
              <div className="mt-[20px] flex flex-col   rounded-[10px]">
                <p className="text-center text-gray-200 text-2xl font-semibold leading-[40.80px] mt-8 ">
                  Fund the Campaign
                </p>
                <div className="mt-[30px]">
                  {/* <input
                    type="number"
                    placeholder="ETH 0.1"
                    step="0.01"
                    className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px]  font-epilogue  text-[18px] leading-[30px]  rounded-[10px]"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />

                  <div className="my-[20px] p-4 rounded-[10px]">
                    <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] ">
                      Your contributions will generate direct impact for the
                      planet
                    </h4>
                    <p className="mt-[20px] font-epilogue font-normal leading-[22px] text-[#808191]">
                      We promise that your investments will directly go to{" "}
                      <br /> organizations who tirelesly strive for a carbon
                      neutral earth.
                    </p>
                  </div>

                  <CustomButton
                    btnType="button"
                    title="Invest"
                    styles="w-full bg-[#8c6dfd]"
                    handleClick={handleDonate}
                  /> */}
                  <div className="mt-[30px]">
                    <input
                      type="number"
                      placeholder="ETH 0.1"
                      step="0.01"
                      className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#b6b6c2] bg-transparent font-epilogue text-white text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />

                    <div className="my-[20px] p-4 bg-[#13131a] rounded-[10px]">
                      <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-white">
                        Back it because you believe in it.
                      </h4>
                      <p className="mt-[20px] font-epilogue font-normal leading-[22px] text-[#808191]">
                        Support the project for no reward, just because it
                        speaks to you.
                      </p>
                    </div>

                    <CustomButton
                      btnType="button"
                      title="Fund Campaign"
                      styles="w-full bg-[#8c6dfd]"
                      handleClick={handleDonate}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer footer-center bg-slate-800 bg-base-300 text-base-content py-2">
        <div className="flex justify-center text-slate-300">
          <p>Copyright © 2023 - Made for Hack4Bengal by HiveeZ</p>
        </div>
      </footer>
    </>
  );
};

export default CampaignDetails;
