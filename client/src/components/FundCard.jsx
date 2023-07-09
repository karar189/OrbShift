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
      {/* <div
        className="text-black mx-10 bg-white rounded-md object-cover"
        onClick={handleClick}>
        <img src={image} alt="fund" className="w-96 h-60 rounded-md " />

        <div className="">
          <div className="">
            <img src={tagType} alt="tag" className="" />
            <p className="">Education</p>
          </div>

          <div className="">
            <h3 className={`${styles.texts1}`}>{title}</h3>
            <p className="">{description}</p>
          </div>

          <div className="">
            <div className="">
              <h4 className="">{amountCollected}</h4>
              <p className="">Raised of {target}</p>
            </div>
            <div className="">
              <h4 className="">{remainingDays}</h4>
              <p className="">Days Left</p>
            </div>
          </div>

          <div className="">
            <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
              <img alt="user" className="w-1/2 h-1/2 object-contain" />
            </div>
            <p className="">
              by <span className="">{owner}</span>
            </p>
          </div>
        </div>
      </div> */}

      <div className="card w-96 crowdcard rounded-md">
        <figure>
        <img src={image} alt="fund" className="w-96 h-60 rounded-md " />
        </figure>
        <div className="card-body">

          <h2 className="card-title">
            <div className="bg-lime-600 m-3 w-28 h-10 flex justify-center items-center rounded-md">
              <h3 className="m-3 text-white">
              Afforestation
              </h3>
              </div>
          </h2>
          
          <div className="">
            <h3 className={`${styles.texts2} px-4 font-lg`}>{title}</h3>
            <p className="px-4 text-white">{description}</p>
          </div>

          <div className="user flex ">

            <div className=" rounded-full flex justify-center items-center bg-[#13131a]">
              <img src={clogo} alt="user" className="w-1/2 h-1/2 object-contain" />
            </div>
            <p className="">
              by <span className="text-ellipsis text-white">{owner}</span>
            </p>
          </div>

          <div className="flex justify-between mx-4 my-6">
            <div className="">
              <h4 className={`${styles.texts2} px-4 font-lg`}>{amountCollected}</h4>
              <p className={`${styles.texts2} px-4 font-lg`}>Raised of {target}</p>
            </div>
            <div className="">
              <h4 className={`${styles.texts2} px-4 font-lg`}>{remainingDays}</h4>
              <p className={`${styles.texts3} px-4 font-lg`}>Days Left</p>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default FundCard;
