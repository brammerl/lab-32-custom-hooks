import { useState, useEffect } from 'react';
import { getAllCharacters } from '../components/services/getAvatarCharacters';

export const useCharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getAllCharacters()
      .then(charactersList => setCharacters(charactersList), [])
  });

  return {
    characters
  }
}