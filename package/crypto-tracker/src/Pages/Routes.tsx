import React from "react";
import {
  Route,
  BrowserRouter,
  Routes as ReactRouterRoutes,
} from "react-router-dom";
import Coin from "./Coin";
import { Home } from "./Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/:coinId" element={<Coin />} />
      </ReactRouterRoutes>
    </BrowserRouter>
  );
};

export default Routes;
