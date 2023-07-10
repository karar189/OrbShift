import React from "react";
import styles from "../styles";
import { tagType, thirdweb } from "../assets";
import { daysLeft } from "../utils";
import clogo from "../assets/crowdlogo.svg";

const FundCard = ({
  owner,
  title,
  description,
  target,
  deadline,
  amountCollected,
  image,
  handleClick,
}) => {
  const remainingDays = daysLeft(deadline);

  return (
    <>
      <div
        className="card w-96 crowdcard mb-10 rounded-md"
        onClick={handleClick}
      >
        <figure>
          <img src={image} alt="fund" className="w-96 h-60 rounded-md " />
        </figure>
        <div className="card-body px-5">
          <h2 className="card-title pt-2">
            <div className="bg-lime-600 my-3 w-28 h-10 flex justify-center items-center rounded-md">
              <h4 className={`m-3 text-white `}>Afforestation</h4>
            </div>
          </h2>

          <div className="headingss">
            <h3 className={`${styles.texts2}  font-lg`}>{title}</h3>
            <p className=" text-[#bec0c7]">{description}</p>
          </div>

          <div className="user flex mt-4">
            <div className=" flex justify-start items-center">
              <img
                src={clogo}
                alt="user"
                className="w-[75%] h-[75%] -mx-[3.5px] object-contain"
              />
            </div>
            <p className="w-52 -ml-3 mt-1 overflow-hidden">
              <span className="text-ellipsis text-[#8F8F8F]">{owner}</span>
            </p>
          </div>

          <div className="flex justify-between  my-6">
            <div className="">
              <h4 className={`${styles.texts2} flex font-lg`}>
                {amountCollected}{" "}
                <span>
                  <h4 className={`${styles.texts2} mx-1`}>ETH</h4>
                </span>{" "}
              </h4>
              <p className={`${styles.texts2} flex text-[#8F8F8F] font-lg`}>
                Raised of {target}{" "}
                <span>
                  <h4 className="mx-1">ETH</h4>
                </span>
              </p>
            </div>
            <div className="">
              <h4 className={`${styles.texts2} font-lg`}>{remainingDays}</h4>
              <p className={`${styles.texts3}  text-[#8F8F8F] font-lg`}>
                Days Left
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FundCard;
