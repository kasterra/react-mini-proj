import React from "react";
import {
  Route,
  BrowserRouter,
  Routes as ReactRouterRoutes,
} from "react-router-dom";
import Chart from "./Chart";
import Coin from "./Coin";
import { Home } from "./Home";
import Price from "./Price";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/:coinId" element={<Coin />}>
          <Route path="chart" element={<Chart />} />
          <Route path="price" element={<Price />} />
        </Route>
      </ReactRouterRoutes>
    </BrowserRouter>
  );
};

export default Routes;
