import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ListDemo from "./ListDemo";
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<ListDemo />, document.getElementById('root'));
registerServiceWorker();
