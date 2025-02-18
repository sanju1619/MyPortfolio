import React from 'react';
import './Navbar.css'; // Import CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="icon">🅿️</span>
        <span className="brand">Portfolio</span>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Project</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>

      <button className="resume-btn">
        Resume <span className="download-icon">⬇️</span>
      </button>
    </nav>
  );
};

export default Navbar;
