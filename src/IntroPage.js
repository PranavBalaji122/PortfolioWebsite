import React from "react";
import './IntroPage.css';
function IntroPage(){

    return(
        <div>
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
          
        </div>
    )
}
export default IntroPage;