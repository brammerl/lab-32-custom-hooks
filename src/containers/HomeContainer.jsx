import React from 'react'
import { useCharacterList } from '../hooks/useCharacterList';
import CharacterList from '../components/characters/CharacterList';

const HomeContainer = () => {
  const { characters } = useCharacterList();

  return (
    <>
      <CharacterList characters={characters}/>
    </>
  )
}

export default HomeContainer;