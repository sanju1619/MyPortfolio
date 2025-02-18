import React from "react";
import "./SkillsSection.css";

// Import your SVG images
import GitIcon from "/assets/icon-git.svg";
import JavaScriptIcon from "/assets/icon-javscript.svg";
import CssIcon from "/assets/css.svg"
import Html from "/assets/html.svg"
const skills = [
  { name: "Git", icon: GitIcon },
  { name: "JavaScript", icon: JavaScriptIcon },
  { name:"Css" , icon:CssIcon},
  {
    name:"Html" , icon:Html
  }
 
];

const SkillsSection = () => {
  return (
    <section className="skills">
      <h2>My <span className="bold">Skills</span></h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className={`skill-card ${skill.name === "JavaScript" ? "highlight" : ""}`} key={index}>
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
