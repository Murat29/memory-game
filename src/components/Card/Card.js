import React from 'react';
import './Card.css';
function Card({ value, disabled, index, handleCardClick, show }) {
  function handleClick() {
    handleCardClick(value, index);
  }

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={handleClick}
      className={`card ${show && 'card_flip'}`}
    >
      <div className="card__shirt" />
      <div className="card__face" draggable="false">
        {value}
      </div>
    </button>
  );
}

export default Card;
