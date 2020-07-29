import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getCharacter } from '../components/services/getAvatarCharacters';


export const useCharacterDetail = () => {
  const [character, setCharacter] = useState([]);
  const match = useRouteMatch('/:name')

  useEffect(() => {
    getCharacter(match.params.name)
      .then(character => setCharacter(character));
  }, []);

  return {
    character
  };
};