import React, { useRef, useState } from 'react';
import './App.css';
import Navbar from './navbar';
import AboutMe from './AboutMe';
import IntroPage from './IntroPage';
import Experiences from './Experiences';

function App() {
  return (
    <div className='main'>
      <Navbar/>
      <IntroPage/>
      <AboutMe/>
      <Experiences/>
    </div>
  );
  //test
}

export default App;
