import React from "react";
import { useParams } from "react-router-dom";

const Coin = () => {
  const params = useParams();
  console.log(params);
  return <h1>coin</h1>;
};

export default Coin;
