import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Navbar from './navbar';
import Education from './Education';

function App() {
  //Hello I am a bozo
  const education = useRef(null);

  const scrollToSection = () => {
    const targetPosition = education.current.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    const duration = 1000; // Adjust the duration of the scroll

    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;

      window.scrollTo(0, easeInOutQuad(elapsedTime / duration) * distance + startPosition);

      if (elapsedTime < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <div>
      <div className='NavBar'>
        <Navbar />
      </div>
      <div className="banner">
        <div className="content">
          <h1 className="GreetingText">Hello, I'm Pranav!</h1>
          <p className='subGreetingText'>Student, Developer</p>
        </div>
        <div className="buttonDiv">
          <button onClick={scrollToSection} className='button'>
            Discover More!
          </button>
        </div>
      </div>
      <div className='Education' ref={education}>
        <Education />
      </div>
    </div>
  );
}

export default App;
