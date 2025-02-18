import { useState } from 'react';
import Navbar from '/src/components/Navbar'
import './App.css';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import Myexperience from './components/Myexperience';
import ContactSection from './components/ContactSection'
import AboutMe from './components/AboutMe';

function App() {

  return <>
  <Navbar/>
  <HeroSection/>
  <SkillsSection/>
  <Myexperience/>
  <AboutMe/>
  <ContactSection/>
  
  </>;
}

export default App;
