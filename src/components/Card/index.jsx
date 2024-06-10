import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { style } from '../Card/style';

const Card = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <article style={style.article} onClick={openModal}>
        <img src={props.user.picture.large} alt="userPicture" style={style.photo} />
        <div style={style.div}>
          <p style={style.p}><b>{props.user.name.first}</b></p>
          <p style={style.p}>⚑ {props.user.location.city}, {props.user.location.country}</p>       
        </div>
      </article>

      {isOpen && (
        <div style={style.modalContainer}>
          <div style={style.modalContent}>
            <span style={style.close} onClick={closeModal}>&times;</span>
            
            <p><b>{props.user.name.first}</b></p>
            <p>⚑ {props.user.location.city}, {props.user.location.country}</p> 
            <p><u>Direction</u>: {props.user.location.street.name},{props.user.location.street.number}</p>  
            <p><u>Phone</u>: {props.user.phone}</p>  
            <p><u>Email</u>: {props.user.email}</p>    
            
            
          </div>
        </div>
      )}
    </div>
  );
};


export default Card;
