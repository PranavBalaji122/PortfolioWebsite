import React from "react";
import './AboutMe.css';      

function AboutMe(){
    return(
        <div className="AboutMeMain">
           <div className="AboutMeHeaderDiv" id = "aboutMeSection">
              <h1 className="AboutMeHeader">About Me!</h1>
                <h1 className="TinyLineUnder"></h1>
          </div>
          <div className="GetToKnowMeSkillsGrid">
            <div className="GetToKnowMMeDiv">
            <h2>Get to Know Me!</h2> 
            </div>
            <div className="SkillsDiv">
                <h2>Skills</h2>    
            </div>
            
          </div>
        </div>
    )
}

export default AboutMe;
