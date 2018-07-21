import characters_json from '../data/characters.json';
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions'; 
import { createCharacter } from './helpers';

//Set up reduers
function characters(state = characters_json, action) {
    //switch statement
    switch(action.type) {
        case ADD_CHARACTER:
            let characters = state.filter(item => item.id !== action.id);
            return characters;
        case REMOVE_CHARACTER:
            //Find all the characters in the original state, put it back into the new array
            characters = [...state, createCharacter(action.id)]
            return characters;
        default:
            return state;
    }
}

export default characters;
