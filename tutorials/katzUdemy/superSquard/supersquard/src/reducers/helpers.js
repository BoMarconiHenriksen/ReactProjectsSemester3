import characters_json from '../data/characters.json';

//Return the hero that matches the id
export function createCharacter(id) {
    let character = characters_json.find(heroCharacter => heroCharacter.id === id);
    return character;
}
