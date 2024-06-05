import React from 'react';
import PropTypes from 'prop-types';
import {style} from "./style.jsx";

const Card = ({ name, photo, country, city }) => {
  return (
    <article style={style.article}>

      <img src={photo} alt="userPicture" style={style.photo} />
      <div style={style.div}>
        
        <p style={style.p}><b>{name}</b></p>
        <p style={style.p}>⚑ {city}, {country}</p>       
      </div>
    </article>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default Card;