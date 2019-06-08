import React from "react";
import { Router } from "@reach/router";

import { Home, LandingPage } from "../containers";

const AppRouter: React.SFC = () => (
  <Router>
    <LandingPage path="/landing" default />
    <Home path=":url" />
  </Router>
);

export default AppRouter;
