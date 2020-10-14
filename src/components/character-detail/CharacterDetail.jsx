import React from 'react'
import PropTypes from 'prop-types'

const CharacterDetail = ({ name, photoUrl, affiliation, enemies, allies }) => {
  return (
    <section>
      <img src={photoUrl} alt={name}/>
      <h3>{name}</h3>
      <ul>
        <li>Affiliations: {affiliation}</li>
        <li>Enemies: {enemies}</li>
        <li>Allies: {allies}</li>
      </ul>
    </section>
  );
};

CharacterDetail.prototype = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired,
  enemies: PropTypes.string.isRequired,
  allies: PropTypes.string.isRequired,
}

export default CharacterDetail;