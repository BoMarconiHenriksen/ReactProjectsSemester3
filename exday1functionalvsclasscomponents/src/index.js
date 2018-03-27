import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import Welcome from "./App2";
import Clock from "./clock";
import Toggle from "./Toggle";
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App name="Bo" />, document.getElementById('root'));
//ReactDOM.render(<App2 />, document.getElementById('root'));
//ReactDOM.render(<Clock />, document.getElementById('root'));
ReactDOM.render(<Toggle />, document.getElementById('root'));
registerServiceWorker();
