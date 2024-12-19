import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>About Me</h2>
            <p className="lead">A passionate developer who loves creating interactive experiences</p>
            <div className="skills-container">
              <h3>Skills</h3>
              <div className="skill-bars">
                <div className="skill">
                  <span>React</span>
                  <div className="progress">
                    <div className="progress-bar" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill">
                  <span>JavaScript</span>
                  <div className="progress">
                    <div className="progress-bar" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill">
                  <span>CSS/SCSS</span>
                  <div className="progress">
                    <div className="progress-bar" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-image">
              <img src="/api/placeholder/400/400" alt="Profile" className="img-fluid rounded-circle" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;