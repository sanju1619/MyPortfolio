import { useState } from 'react';

import Navbar from '/src/components/Navbar'
import './App.css';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection'
import AboutMe from './components/AboutMe';
import MyExperience from './components/Myexperience'

function App() {

  return <>
  <Navbar />
      <div id="hero"><HeroSection /></div>
      <div id="skills"><SkillsSection /></div>
      <div id="experience"><MyExperience /></div>
      <div id="about"><AboutMe /></div>
      <div id="contact"><ContactSection /></div>
  
  </>;
}

export default App;
