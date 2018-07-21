//This file is our root for our reducers
import characters from './character_reducer';
import heroes from './hero_reducer';

import { combineReducers } from 'redux';

//Default export, eksporter nu begge reducers.
const rootReducer = combineReducers({
    characters,
    heroes
})

export default rootReducer;

