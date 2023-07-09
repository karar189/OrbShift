import React from "react";

import { tagType, thirdweb } from "../assets";
import { daysLeft } from "../utils";

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
    <div className="" onClick={handleClick}>
      <img src={image} alt="fund" className="" />

      <div className="">
        <div className="">
          <img src={tagType} alt="tag" className="" />
          <p className="">Education</p>
        </div>

        <div className="">
          <h3 className="">{title}</h3>
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
            <img
              // src={image}
              alt="user"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="">
            by <span className="">{owner}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FundCard;
