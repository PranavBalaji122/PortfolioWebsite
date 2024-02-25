import React, { useRef, useState } from 'react';
import './App.css';
import Navbar from './navbar';
import AboutMe from './AboutMe';
import IntroPage from './IntroPage';

function App() {
  return (
    <div>
      <Navbar/>
      <IntroPage/>
      <AboutMe/>
      
    </div>
  );
  //test
}

export default App;
