import React from "react";
import './IntroPage.css';
import movingArrow from "../arrowDown.json"
import Lottie from "lottie-react";
function IntroPage(){

    return(
        <div className="ContentWrapper">
           <div className="Img">
                <img  className="CircularPranavFace" src="circlePranavFace.png"/>
           </div>
           <div className="MainText">
                <h1 className="GreetingText">Hey, I'm Pranav!</h1>
                <h2 className="SubGreetingText">Student, Developer</h2>
           </div>
           <div className="DiscoverMoreBtn">
                <button className="DiscoverMoreButton">Discover More!</button>
           </div>
           <Lottie animationData = {movingArrow}/>
          
        </div>
    )
}
export default IntroPage;