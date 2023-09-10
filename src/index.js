import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from './GlobalStyles/GlobalStyles';
import App from './App';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <Global/>
      <App />
    
  </React.StrictMode>
);
