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
              <div className="ParagraphDiv">
               <p className="Paragraph1Div">Hey, I'm Pranav Balaji from Marlbrough, MA! I am currently a senior at the Advanced Math and Science Academy, intrested in pursuing a 
                major in Computer Science. In particular, I am passionate about AI, Machine Learning, and Full Stack Development. </p>
                <p>Other than computer scinece, some of my other passion/hobbies are:</p>
                <ul>
                  <li><text>FTC Robtics</text> : For the last 7 years, I have been part of First Tech Challange(FTC) Team 15089, the Circuit Breakers, where I actively design, build, and program robots to compete in various different enviorments!   </li>
                </ul>
              </div>
            </div>
            <div className="SkillsDiv">
                <h2>Skills</h2>    
                
            </div>
            
          </div>
        </div>
    )
}

export default AboutMe;
