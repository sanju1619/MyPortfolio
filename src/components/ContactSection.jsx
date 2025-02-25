import React from "react";
import "./ContactSection.css";

import { FaFacebook, FaReddit, FaTwitter, FaDiscord,  FaGithub, FaGit,FaLinkedin } from "react-icons/fa";

const ContactSection = () => {

 const handleSumbit=(e)=>{
  e.preventDefault()

  alert("Response has been sent")


  }
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left Side - Contact Form */}
        <div className="contact-form">


          <form onSubmit={handleSumbit}>

            <input type="text" placeholder="Your name" required/>
            <input type="email" placeholder="Email" required/>
            <input type="text" placeholder="Your website (If exists)"  />
            <textarea placeholder="How can I help?*" required></textarea>
            <button className="contact-btn" type="submit">Get In Touch</button>

          </form>
          {/* Social Icons */}
          <div className="social-icons">
          <a href="https://www.linkedin.com/in/sanjay-shankar16/" target="_blank"><button className="icon-btn"><FaLinkedin /></button></a>
          <a  href="https://github.com/sanju1619" target="_blank"><button className="icon-btn"><FaGithub /></button></a>
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
