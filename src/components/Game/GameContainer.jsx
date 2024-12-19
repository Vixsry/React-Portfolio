import React, { useState, useEffect } from 'react';
import GameCard from './GameCard';
import GameStats from './GameStats';
import './Game.css';

const GameContainer = () => {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setLevel(1);
  };

  const handleScoreUpdate = (points) => {
    setScore(prev => prev + points);
    if (score > level * 100) {
      setLevel(prev => prev + 1);
    }
  };

  return (
    <div className="game-container">
      <div className="game-header">
        <h2>Interactive Portfolio Game</h2>
        {!gameStarted ? (
          <button className="btn btn-primary" onClick={startGame}>
            Start Game
          </button>
        ) : (
          <GameStats score={score} level={level} />
        )}
      </div>
      <div className="game-grid">
        {gameStarted && (
          <>
            <GameCard 
              title="Web Development"
              points={10}
              onScore={handleScoreUpdate}
            />
            <GameCard 
              title="Mobile Apps"
              points={15}
              onScore={handleScoreUpdate}
            />
            <GameCard 
              title="UI/UX Design"
              points={20}
              onScore={handleScoreUpdate}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default GameContainer;