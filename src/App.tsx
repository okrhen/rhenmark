import React from 'react';
import AppRouter from './routes/AppRouter';

import './components/Icon/config/icon-init';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return <AppRouter />;
};

export default App;
