import React from 'react';
import { useCharacterDetail } from '../hooks/useCharacterDetail';
import CharacterDetail  from '../components/character-detail/CharacterDetail';

const DetailContainer = () => {


  const { character } = useCharacterDetail();

  console.log(character);
  

  return (
    <>
      <CharacterDetail {...character}/>
    </>
  )
}

export default DetailContainer;