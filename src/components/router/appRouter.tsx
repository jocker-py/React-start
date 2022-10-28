import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../../pages/About';
import NotFound from '../../pages/NotFound';
import Products from '../../pages/Products';
import Home from '../../pages/Home';
import Characters from '../../pages/Characters';

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
