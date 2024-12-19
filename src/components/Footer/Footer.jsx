import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About GameFolio</h5>
            <p>An interactive portfolio showcasing my work through gamification.</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home">Home</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact</h5>
            <p>Email: example@email.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2024 GameFolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;