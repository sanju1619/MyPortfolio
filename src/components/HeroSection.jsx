import React from "react";
import "./HeroSection.css";
import { FaFacebook, FaReddit, FaTwitter, FaDiscord,  FaGithub, FaGit ,FaLinkedin} from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hello I’m <span className="highlight">Sanjay.</span> <br />
          <span className="bold">Frontend</span> <span className="outline">Developer</span> <br />
          Based In <span className="highlight">India.</span>
        </h1>

        <p>
          I'm Sanjay.I'm Sanjay, a frontend web developer dedicated to bringing creative designs to life on the web. I specialize in HTML, CSS, and JavaScript, with a focus on React.js to build interactive and user-friendly interfaces. I'm always eager to learn and tackle new challenges in the ever-evolving world of web development.

.
        </p>

        <div className="social-icons">
        <div className="social-icons">
            <button className="icon-btn"><FaLinkedin /></button>
            <button className="icon-btn"><FaGithub /></button>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="/src/components/images/Frame 20.svg"
          alt="Hero Illustration"
          height={886}
          width={596}
        />
      </div>
    </section>
  );
};

export default HeroSection;
