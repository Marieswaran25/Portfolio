import React from 'react';
import './App.css';
import About from './components/Body/about';
import Education from './components/Education/edu';
import Navheader from './components/Navbar/nav';
import SkillSet from './components/skillSet/skillSet';

function App() {
  return (
    <div className="App bg-dark text-light">
      <Navheader />
      <About />
      <Education />
      < SkillSet />
    </div>
  );
}

export default App;
