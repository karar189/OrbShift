import React from "react";

const CountBox = ({ title, value }) => {
  return (
    <div>
      <h4>{value}</h4>
      <p>{title}</p>
    </div>
  );
};

export default CountBox;
