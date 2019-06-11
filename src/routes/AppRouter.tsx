import React from "react";
import { Router } from "@reach/router";

import { Home, LandingPage } from "../containers";
import SharedRouter from "./SharedRouter";

const AppRouter: React.SFC = () => (
  <Router>
    <LandingPage path="/landing" />
    <SharedRouter path="/">
      <Home path="/:url" default />
    </SharedRouter>
  </Router>
);

export default AppRouter;
