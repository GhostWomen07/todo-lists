import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { setFireBase } from './firebase/getFireBase';

setFireBase();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

