import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/navBar/navBar';
import AppRouter from './components/router/appRouter';

const App: FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
