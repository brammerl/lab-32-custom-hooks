import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CharacterCard from '../character-card/CharacterCard';

const CharacterList = ({ characters }) => {
  const characterLi = characters.map(character => (
    <li key={character.name}>
      <Link to={`/${character.name}`}>
        <CharacterCard name={character.name} photoUrl={character.photoUrl}/>
      </Link>
    </li>
  ));

  return (
    <ul>
      {characterLi}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    photoUrl: PropTypes.string
  })).isRequired
};


export default CharacterList;