import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { MegaProvider } from './context/MegaContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MegaProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:numero" element={<App />} />
        </Routes>
      </BrowserRouter>
    </MegaProvider>
  </React.StrictMode>
);
