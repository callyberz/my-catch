import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MapComp } from './pages/Map';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapComp />
  </React.StrictMode>
);
