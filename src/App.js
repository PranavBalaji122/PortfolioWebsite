import React, { useRef, useState } from 'react';
import './App.css';
import Navbar from './navbar';
import Education from './Education';
import IntroPage from './IntroPage';

function App() {
  return (
    <div>
      <Navbar/>
      <IntroPage/>
    </div>
  );
}

export default App;
