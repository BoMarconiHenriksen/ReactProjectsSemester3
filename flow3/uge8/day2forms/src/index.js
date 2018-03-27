import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NameForm from "./NameForm";
import EssayForm from "./EssayForm";
import FlavorForm from "./FlavorForm";
import ManyInputFields from "./ManyInputFields";
import Reservation from "./Reservation";
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<NameForm />, document.getElementById('root'));
//ReactDOM.render(<EssayForm />, document.getElementById('root'));
//ReactDOM.render(<FlavorForm />, document.getElementById('root'));
//ReactDOM.render(<ManyInputFields />, document.getElementById('root'));
ReactDOM.render(<Reservation />, document.getElementById('root'));
registerServiceWorker();
