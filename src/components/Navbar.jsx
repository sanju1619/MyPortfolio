import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css"; // Import CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Clicking Logo Scrolls to Hero Section */}
      <div className="logo">
        <Link to="hero" smooth={true} duration={500} className="logo-link">
          <span className="icon">🅿️</span>
          <span className="brand">Portfolio</span>
        </Link>
      </div>

      {/* Navbar Links */}
      <ul className="nav-links">
        <li>
          <Link to="about" smooth={true} duration={500}>About Me</Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>Skills</Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>Projects</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>Contact Me</Link>
        </li>
      </ul>

      {/* Resume Download Button */}
      <a style={{ textDecoration: "none" }} href="/MyResume.pdf" download="MyResume.pdf">
        <button className="resume-btn">
          Resume <span className="download-icon">⬇️</span>
        </button>
      </a>
    </nav>
  );
};

export default Navbar;
