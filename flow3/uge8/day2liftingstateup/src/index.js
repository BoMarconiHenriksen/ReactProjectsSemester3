import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import App2 from './App2';
import JokesStore from "./JokeStore";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App jokeStore={JokesStore}  />, document.getElementById('root'));
//ReactDOM.render(<App2 todoStore={store} />, document.getElementById('root'));
registerServiceWorker();
