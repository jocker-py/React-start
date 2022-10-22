import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/navBar/navBar';
import AppRouter from './components/router/appRouter';

const App: FC = () => {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <NavBar />
        <AppRouter />
      </React.StrictMode>
    </BrowserRouter>
  );
};

export default App;
