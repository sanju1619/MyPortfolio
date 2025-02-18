import React from "react";
import "./ContactSection.css";

import { FaFacebook, FaReddit, FaTwitter, FaDiscord,  FaGithub, FaGit } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left Side - Contact Form */}
        <div className="contact-form">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Your website (If exists)" />
          <textarea placeholder="How can I help?*"></textarea>
          <button className="contact-btn">Get In Touch</button>

          {/* Social Icons */}
          <div className="social-icons">
            <button className="icon-btn"><FaFacebook /></button>
            <button className="icon-btn"><FaReddit /></button>
            <button className="icon-btn"><FaGithub /></button>
            <button className="icon-btn"><FaDiscord /></button>
          </div>
        </div>

        {/* Right Side - Contact Information */}
        <div className="contact-info">
          <h2>Let's <strong>talk</strong> for</h2>
          <h2>Something special</h2>
          <p>
            I seek to push the limits of creativity to create high-engaging, 
            user-friendly, and memorable interactive experiences.
          </p>
          <p className="contact-email">sanju483985@gmail.com</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="contact-footer">
        <div className="footer-left">Sanjay</div>
        <div className="footer-right">@ 2025 | </div>
      </footer>
    </section>
  );
};

export default ContactSection;
