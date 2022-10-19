import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';


const domain = "dev-cp0xjt-g.us.auth0.com";
const clientId = "Aaupe1WtowzaiWKl8WBTXlWyCXnRLvOw";



console.log(domain);
console.log(clientId);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
