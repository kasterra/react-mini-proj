import React from "react";
import { useParams } from "react-router-dom";

const Coin = () => {
  const params = useParams();
  console.log(params);
  return <div>coin</div>;
};

export default Coin;
