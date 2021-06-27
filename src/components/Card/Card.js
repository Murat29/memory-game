import React from 'react';
import './Card.css';
function Card({ value, disabled }) {
  const [isFlip, setIsFlip] = React.useState(false);

  function handleClick(e) {
    e.preventDefault();
    setIsFlip(!isFlip);
  }
  return (
    <button disabled={disabled} onClick={handleClick} className={`card ${isFlip && 'card_flip'}`}>
      <div className="card__shirt" />
      <div className="card__face">{value}</div>
    </button>
  );
}

export default Card;
