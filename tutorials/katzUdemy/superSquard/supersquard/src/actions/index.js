//Action type
export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER';

//Action creator
export function addCharacterById(id) {
    //action object
    const action = {
        type: ADD_CHARACTER,
        id
    }
    return action; 
}

//HeroReducer file skal opdateres når denne funktion er lavet.
export function removeCharacterById(id) {
    const action = {
        type: REMOVE_CHARACTER,
        id
    }
    return action;
}