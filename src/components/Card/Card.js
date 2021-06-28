import React from 'react';
import './Card.css';
function Card({ value, disabled, index, handleCardClick, show }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => handleCardClick(value, index)}
      className={`card ${show && 'card_flip'}`}
    >
      <div className="card__shirt" />
      <div className="card__face">{value}</div>
    </button>
  );
}

export default Card;
