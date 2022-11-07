import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/navBar/navBar';
import AppRouter from './components/router/appRouter';
import './App.css';
import { IAppProps } from './redux/interfaces';

const App: FC<IAppProps> = ({ state, dispatch }) => {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <NavBar />
        <AppRouter state={state} dispatch={dispatch} />
      </React.StrictMode>
    </BrowserRouter>
  );
};

export default App;
