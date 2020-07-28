import React, { useState, useEffect } from 'react';
import { getAllCharacters } from '../services/getAvatarCharacters';
import CharacterList from '../characters/CharacterList';

const HomeContainer = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getAllCharacters()
      .then(characterList => setCharacters(characterList))
  }, []);

  return (
    <>
      <CharacterList characters={characters}/>
    </>
  )
}

export default HomeContainer;