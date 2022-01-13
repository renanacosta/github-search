import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserGlobalContext } from './global/GlobalContext';

ReactDOM.render(
  <React.StrictMode>
    <UserGlobalContext>
    <App />
    </UserGlobalContext>
  </React.StrictMode>,
  document.getElementById('root')
);
