import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import StocksPage from '../pages/StocksPage/StocksPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/stocks" element={<StocksPage />} />
      <Route path="*" element={<div>404 Page not found</div>} />
    </Routes>
  );
};

export default Router;
