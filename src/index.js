import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from './GlobalStyles/GlobalStyles';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={store}>

      <Global/>
      <App />

    </Provider>
    
  </React.StrictMode>
);
