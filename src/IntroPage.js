import React from "react";
import './IntroPage.css';
import movingArrow from "./arrowDown.json"
import Lottie from "lottie-react";
import { Link, animateScroll as scroll } from 'react-scroll';

function IntroPage(){
     const scrollToAboutMe = () =>{
        
          scroll.scrollTo("aboutMeSection", {smooth: true, duration: 2000 });
      };
      const scrollToHome = () =>{    
          scroll.scrollTo("HomeSection", {smooth: true, duration: 500 });
     };
     
    return(
        <div className="ContentWrapper" id = "HomeSection">
           <div className="Img">
                <img  className="CircularPranavFace" src="circlePranavFace.png"/>
           </div>
           <div className="MainText">
                <h1 className="GreetingText">Hey, I'm Pranav!</h1>
                <h2 className="SubGreetingText">Student, Developer</h2>
           </div>
           <div className="DiscoverMoreBtn">
           <Link to="aboutMeSection" smooth={true} duration={2000}>    <button className="DiscoverMoreButton" onClick={scrollToAboutMe}>Discover More!</button></Link> 
           </div>
           <Link to="aboutMeSection" smooth={true} duration={2000}>   <Lottie animationData = {movingArrow} className="LottieArrow" onClick={scrollToAboutMe}/></Link> 
        </div>
    )
}
export default IntroPage;