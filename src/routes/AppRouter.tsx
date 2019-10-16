import { Router } from '@reach/router';
import React from 'react';

import { Home, LandingPage, Pages, Overview } from '../containers';
import SharedRouter from './SharedRouter';

const AppRouter: React.SFC = () => (
  <Router>
    <LandingPage path="/landing" />
    <SharedRouter path="/">
      <Home path="/home" default />
      <LandingPage path="/que" />
      <Pages path="/steps/:number" />
      <Overview path="/overview" default />
    </SharedRouter>
  </Router>
);

export default AppRouter;
