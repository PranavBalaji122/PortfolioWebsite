import React, { useRef, useState } from 'react';
import './App.css';
import Navbar from './navbar';
import AboutMe from './AboutMe';
import IntroPage from './IntroPage';
import Experiences from './Experiences';
import Projects from './Projects';
import Footer from './Footer'

function App() {
  return (
    <div className='main'>
      <Navbar/>
      <IntroPage/>
      <AboutMe/>
      <Experiences/>
      <Projects/>
      <Footer/>
    </div>
  );
  //test
}

export default App;
