import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ExchangeCalc from './exchangeCalc';

const ReactRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/exchange" element={<ExchangeCalc />} />
    </Routes>
  </BrowserRouter>
);

export default ReactRoutes;
