import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import BookStore from './BookStore';

ReactDOM.render(
    <HashRouter>
        <App bookStore={BookStore} />
    </HashRouter>
    , document.getElementById('root'));
registerServiceWorker();
