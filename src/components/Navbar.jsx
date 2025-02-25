import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import Myresume from "./MyResume.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="hero" smooth={true} duration={500} className="logo-link">
          <span className="brand">Sanjay S</span>
        </Link>
      </div>

      {/* Hamburger Menu (Changes between ☰ and ✖) */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </div>

      {/* Navbar Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>About Me</Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Skills</Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Projects</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Contact Me</Link>
        </li>
        {/* Resume Button inside nav-links for mobile view */}
        <li className="resume-mobile">
          <a style={{ textDecoration: "none" }} href={Myresume} download="MyResume.pdf">
            <button className="resume-btn">
              Resume <span className="download-icon">⬇️</span>
            </button>
          </a>
        </li>
      </ul>

      {/* Resume Button (Visible in desktop view) */}
      <a className="resume-desktop" style={{ textDecoration: "none" }} href={Myresume} download="MyResume.pdf">
        <button className="resume-btn">
          Resume <span className="download-icon">⬇️</span>
        </button>
      </a>
    </nav>
  );
};

export default Navbar;
