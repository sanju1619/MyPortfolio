import React from 'react';
import './AboutMe.css'; // Import the CSS file
import AboutImage from "/assets/AboutImage.svg"; // Import the image

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="image-section">
        <img
          src={AboutImage}
          alt="About Me"
          className="profile-image"
        />
      </div>
      <div className="text-section">
        <h2 className="about-me-title">About Me</h2>
        <p className="about-me-paragraph">
        Hello! I'm Sanjay, a frontend web developer fueled by a passion for creating beautiful and functional web experiences. With a toolkit that includes HTML, CSS, JavaScript, and React.js, 
        </p>
        <p className="about-me-paragraph">
        I'm dedicated to clean code, pixel-perfect design, and delivering exceptional user interfaces. I graduated with a BE in Computer Science Engineering from Mysore district in 2022,
      
        </p>
        <p className="about-me-paragraph">
        and I have a year and a half of experience in the Relevance Lab as a Service Desk Engineer/IT Support. I'm constantly exploring new technologies and approaches to stay at the forefront of web development.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
