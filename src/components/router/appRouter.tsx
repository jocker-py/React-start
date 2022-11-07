import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../../pages/About';
import NotFound from '../../pages/NotFound';
import Products from '../../pages/Products';
import Home from '../../pages/Home';
import Characters from '../../pages/Characters';
import { IAppProps } from '../../redux/interfaces';

const AppRouter: FC<IAppProps> = ({ state, dispatch }) => {
  return (
    <Routes>
      <Route path="/" element={<Home state={state.homePage} />} />
      <Route path="/products" element={<Products state={state.productsPage} />} />
      <Route path="/products/:id" element={<Home state={state.homePage} />} />
      <Route path="/about" element={<About state={state.aboutPage} />} />
      <Route
        path="/characters"
        element={<Characters state={state.charactersPage} dispatch={dispatch} />}
      />
      <Route path="/*" element={<NotFound state={state.notFoundPage} />} />
    </Routes>
  );
};

export default AppRouter;
