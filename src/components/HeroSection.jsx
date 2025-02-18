import React from "react";
import "./HeroSection.css";

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
          I'm Sanjay. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to make a
          specimen book.
        </p>

        <div className="social-icons">
          <a href="#" className="icon">📘</a>
          <a href="#" className="icon">📷</a>
          <a href="#" className="icon">🐦</a>
          <a href="#" className="icon">🔗</a>
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
