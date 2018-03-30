import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import countryFactory from "./countryFactory";

 ReactDOM.render(
    <App factory={countryFactory} />,document.getElementById('root')
  );


