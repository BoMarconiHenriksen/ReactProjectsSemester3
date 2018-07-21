import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import { addCharacterById } from './actions';

const store = createStore(rootReducer);
//Check if the store is working
console.log('store.getState()', store.getState());

//Subscribe is an eventlistener that fires every time there is an update.
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(addCharacterById(2));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    
    , document.getElementById('root')
);


