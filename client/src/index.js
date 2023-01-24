import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PropertyState from './context/PropertyState';
import { HandlerState } from './context/HandlerContext';
import {LeadState} from './context/LeadContext'
import {UserState } from './context/UserContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <PropertyState>
    <LeadState>
      <HandlerState>
      <UserState>
      <App />
      </UserState>
      </HandlerState>
    </LeadState>
    </PropertyState>
  </React.StrictMode>
);


