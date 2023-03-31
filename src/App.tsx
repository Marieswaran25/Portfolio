import React from 'react';
import Feedback from './components/feedback/Feedback';
import './App.css';
import About from './components/Body/about';
import Connect from './components/contact/connect';
import Education from './components/Education/edu';
import Experiance from './components/Experiance/exp';
import Navheader from './components/Navbar/nav';
import SkillSet from './components/skillSet/skillSet';

function App() {
  return (
    <div className="App bg-dark text-light">
      <Navheader />
      <About />
      <Education />
      < SkillSet />
      <Experiance />
      <Connect />
      <Feedback />
    </div>
  );
}

export default App;
