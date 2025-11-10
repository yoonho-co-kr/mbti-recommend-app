// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // 또는 ./App.tsx
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
