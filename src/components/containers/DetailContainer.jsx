import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getCharacter } from '../services/getAvatarCharacters';
import CharacterDetail from '../character-detail/CharacterDetail';

const DetailContainer = () => {
  const [character, setCharacter] = useState();
  const match = useRouteMatch(`/:name`);

  useEffect(() => {
    getCharacter(match.params.name)
      .then(character => setCharacter(character));
  }, [])

  return (
    <>
      <CharacterDetail {...character}/>
    </>
  )
}

export default DetailContainer;