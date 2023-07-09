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
              <img alt="user" className="w-1/2 h-1/2 object-contain" />
            </div>
            <p className="">
              by <span className="">{owner}</span>
            </p>
          </div>
        </div>
      </div> */}

      <div className="card w-96 bg-white rounded-md">
        <figure>
        <img src={image} alt="fund" className="w-96 h-60 rounded-md " />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="">{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FundCard;
