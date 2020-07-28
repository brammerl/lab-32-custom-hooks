import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = ({ name, photoUrl }) => {
  return (
    <section>
      <h3>{name}</h3>
      <img src={photoUrl} alt={name} />
    </section>
  )
}

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired
};

export default CharacterCard;