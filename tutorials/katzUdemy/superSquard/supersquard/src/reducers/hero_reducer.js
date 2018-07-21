import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';
import { createCharacter } from './helpers';

//Hero reducer
function heroes(state = [], action) {
    switch(action.type) {
        case ADD_CHARACTER:
            //Array med de resterende heroes
            let heroes = [...state, createCharacter(action.id)];
            return heroes;
        case REMOVE_CHARACTER:
            heroes = state.filter(item => item.id !== action.id);
            return heroes;
        default:
            return state;
    }
}

export default heroes;