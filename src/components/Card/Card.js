import React from 'react';
import './Card.css';
function Card({ value }) {
  const [isFlip, setIsFlip] = React.useState(false);

  function handleClick(e) {
    e.preventDefault();
    setIsFlip(!isFlip);
  }
  return (
    <button onClick={handleClick} className={`card ${isFlip && 'card_flip'}`}>
      <div className="card__shirt" />
      <div className="card__face">{value}</div>
    </button>
  );
}

export default Card;
