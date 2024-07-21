import React from "react";
import './AboutMe.css';      

function AboutMe(){

  const aboutInfo = [
    {
      head: "FTC Roobtics",
      description: "For the last 7 years, I have been part of First Tech Challange(FTC) Team 15089, the Circuit Breakers, where I actively design, build, and program robots to compete in various different challanges!"
      
    },
    {
      head: "Sports",
      description: "During the football season, you'll find me hyped up about the New England Patriots or find me ranting about how trash my fantasy football team is.",
     
    },
    {
      head: "Hobbies",
      description: "Some of my other hobbies include outdoor camping & hiking, playing fortnite & Uno with firends, and eating new types of food.",
    },
  ]

  const skillsList =[
    {
      head:"fakeButton",
      skill:"React Js"
    },
    {
      head:"fakeButton",
      skill:"Django"
    },
    {
      head:"fakeButton",
      skill:"SQL"
    },
    {
      head:"fakeButton",
      skill:"HTML"
    },
    {
      head:"fakeButton",
      skill:"CSS"
    },
    {
      head:"fakeButton",
      skill:"Data Science"
    },
    {
      head:"fakeButton",
      skill:"Java"
    },
    {
      head:"fakeButton",
      skill:"Python"
    },
    {
      head:"fakeButton",
      skill:"R"
    },
    {
      head:"fakeButton",
      skill:"Node JS"
    },
    {
      head:"fakeButton",
      skill:"Pandas Library"
    },
    {
      head:"fakeButton",
      skill:"Scikit Learn"
    },
    {
      head:"fakeButton",
      skill:"NumPy"
    },
    {
      head:"fakeButton",
      skill:"Matplotlib"
    },
    {
      head:"fakeButton",
      skill:"GitHub"
    },
    {
      head:"fakeButton",
      skill:"Project Management"
    },
    {
      head:"fakeButton",
      skill:"Teamwork"
    },
    {
      head:"fakeButton",
      skill:"Leadership"
    },
    {
      head:"fakeButton",
      skill:"Patience"
    },
    {
      head:"fakeButton",
      skill:"Time Management"
    },
   
  ]




    return(
        <div className="AboutMeMain" id = "aboutMeSection">
           <div className="AboutMeHeaderDiv">
              <h1 className="AboutMeHeader" >About Me!</h1>
                <h1 className="TinyLineUnder"></h1>
          </div>


          <div>
          <div className="GetToKnowMeSkillsGrid">
            <div className="GetToKnowMeDiv">
              <h2 className="GetToKnowMeTxt">Get to Know Me!</h2> 
              <div className="ParagraphDiv">
               <p className="Paragraph1Div">Hey, I'm Pranav Balaji from Marlbrough, MA! I am currently a senior at the Advanced Math and Science Academy, intrested in pursuing a 
                major in Computer Science. In particular, I am passionate about AI, Machine Learning, and Full Stack Development. </p>
                <br></br>
                <p>Other than coding, some of my other passion/hobbies are:</p>
                
                <ul>
                 {aboutInfo.map((item,index)=>{
                    return(
                      <li className="aboutMeList"><a> <text className="firstWord">{item.head}</text>: {item.description} </a></li>
                    )
                 })}
                </ul>
              </div>
            </div>
            <div className="SkillsDiv" >
                <h2 className="skillsHeadingTxt">Skills</h2>    
                <div className="ParagraphDiv">
                  <div>
                     <ul className = "ButtonLikeSkillsDisplay">
                     {skillsList.map((item)=>{
                       return(
                         <li><a className={item.head}>{item.skill}</a></li>
                        )
                     })}
                    </ul>
                  </div> 

                </div>
                
            </div>
            
            
          </div>

          </div>
        </div>
    )
}

export default AboutMe;
