import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PersonStore from './PersonStore';

ReactDOM.render(<App personStore={PersonStore} />, document.getElementById('root'));
registerServiceWorker();
