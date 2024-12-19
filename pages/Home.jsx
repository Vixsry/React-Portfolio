import React from 'react';
import About from '../components/About/About';
import GameContainer from '../components/Game/GameContainer';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container text-center">
          <h1>Welcome to GameFolio</h1>
          <p className="lead">Explore my portfolio through an interactive game experience</p>
        </div>
      </section>
      <GameContainer />
      <About />
    </div>
  );
};

export default Home;