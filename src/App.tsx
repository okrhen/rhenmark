import { Router } from '@reach/router';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('pages/home'))


const App: React.FC = () => {
  return (
    <Suspense fallback="Loading">
      <Router>
        <Home path="/" default />
      </Router>
    </Suspense>
  );
};

export default App;
