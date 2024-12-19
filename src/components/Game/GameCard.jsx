import React, { useState } from 'react';
import './Game.css';

const GameCard = ({ title, points, onScore }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isCollected, setIsCollected] = useState(false);

  const handleClick = () => {
    if (!isCollected) {
      setIsFlipped(true);
      setTimeout(() => {
        setIsCollected(true);
        onScore(points);
      }, 1000);
    }
  };

  return (
    <div 
      className={`game-card ${isFlipped ? 'flipped' : ''} ${isCollected ? 'collected' : ''}`}
      onClick={handleClick}
    >
      <div className="card-front">
        <h3>{title}</h3>
        <p>Click to reveal</p>
      </div>
      <div className="card-back">
        <span className="points">+{points}</span>
      </div>
    </div>
  );
};

export default GameCard;