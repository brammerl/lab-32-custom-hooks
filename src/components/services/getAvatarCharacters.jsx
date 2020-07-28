import CharacterCard from "../character-card/CharacterCard"

export const getAllCharacters = () => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters`)
    .then(res => res.json())
    .then(characters => characters.map(character => ({
      id: character._id,
      name: character.name,
      photoUrl: character.photoUrl  
    })));
};

export const getCharacter = (characterName) => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?name=${characterName}`)
    .then(res => res.json())
    .then(([character]) => ({
      name: character.name,
      photoUrl: character.photoUrl,
      affiliation: character.affiliation,
      enemies: character.enemies,
      allies: character.allies,
    }));
};