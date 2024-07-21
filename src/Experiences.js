import './Experiences.css'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import React, {useState} from 'react';


function Experiences(){
  const [currentDiv, setCurrentDiv] = useState(1);
  const [activeButton, setActiveButton] = useState(1); 

  const handleButtonClick = (divNumber) => {
    setCurrentDiv(divNumber);
    setActiveButton(divNumber)
  }

  const expereinces = [
    {
      head:"Expereince",
      experience:"Reserch Intern @ IIT",
      divNumber: 1
  },
    {
        head:"Expereince",
        experience:"First Tech Challenge",
        divNumber: 2
    },
  ]


  const FirstTechChallenge = 
      <div>
        <h2 className='expereinceInformationHeader'>First Tech Challenge Team 15089</h2>
        <span className='expereinceInformationSubHeader'>September 2019 - March 2024</span>
        <ul>
          <li className='expereinceFTCBulletPoint'>Designed, constructed, and programmed FTC team 15089's robot</li>
          <li className='expereinceFTCBulletPoint'>Programmed the robot to autonomously complete commpetiton-specfic tasks using various sensors</li>
          <li className='expereinceFTCBulletPoint'>Utilized wheel encoders to create a custom PID controler</li>
          <li className='expereinceFTCBulletPoint'>Implemented various machine learning models to detect game-specific elements</li>
          <li className='expereinceFTCBulletPoint'>Placed seventh in the state of Massachusetts; Dean's List award finalist</li>
          <li className='expereinceFTCBulletPoint'>Engaged in community outreach events promoting STEM education to the younger generation</li>
          <li className='expereinceFTCBulletPoint'>Took leadership roles regarding the mentoring of numerous FTC teams throughout Massachusetts</li>
        </ul>
      </div>

  const ReserchIntern = 
      <div>
        <h2 className='expereinceInformationHeader'>Reserch Intern @ The Indian Institute of Technology</h2>
        <span className='expereinceInformationSubHeader'>July 2023 - Aug 2023</span>
        <ul>
          <li className='expereinceFTCBulletPoint'>Collaborated with Dr. Soundararajan to analyze real wage data from over 20,000 individuals using the National Survey of the Government of India          </li>
          <li className='expereinceFTCBulletPoint'>Utilized R and rivers library to handle data cleaning, processing, and statistical analysis, leading to the identification of key wage determinants and leading to determine that 2.2% of all workers were outliers          </li>
          <li className='expereinceFTCBulletPoint'>Visualized data insights using ggplot, creating 4 comprehensive charts and graphs that effectively communicate findings to Dr. Soundararajan          </li>
          <li className='expereinceFTCBulletPoint'>Prepared a detailed report summarizing the analysis of the presented findings, resulting in a increase in the understanding of wage distribution pattern          </li>
        </ul>
    </div>


    const div3Content = 
    <div>
      <h2 className='expereinceInformationHeader'>First Tech Challenge Team 15089 Div 3 Content</h2>
      <span className='expereinceInformationSubHeader'>September 2019 - March 2024</span>
      <ul>
        <li className='expereinceFTCBulletPoint'>Designed, constructed, and programmed FTC team 15089's robot</li>
        <li className='expereinceFTCBulletPoint'>Programmed the robot to autonomously complete commpetiton-specfic tasks using various sensors</li>
        <li className='expereinceFTCBulletPoint'>Utilized wheel encoders to create a custom PID controler</li>
        <li className='expereinceFTCBulletPoint'>Implemented various machine learning models to detect game-specific elements</li>
        <li className='expereinceFTCBulletPoint'>Placed seventh in the state of Massachusetts; Dean's List award finalist</li>
        <li className='expereinceFTCBulletPoint'>Engaged in community outreach events promoting STEM education to the younger generation</li>
        <li className='expereinceFTCBulletPoint'>Took leadership roles regarding the mentoring of numerous FTC teams throughout Massachusetts</li>
      </ul>
  </div>

    return(
        <div className="ExperiencesMain" id = "experiencesSection">
            <div className="ExperiencesHeaderDiv" id = "ExperienceSection">
                <h1>Experiences</h1>
                <h1 className='TinyLineUnder'></h1>
            </div>

          <div className='experiencesSubSection'>
              <div className='experiencesShelfLeft'>              
                <ul>
                    {expereinces.map((item,index)=>{
                        return(
                          <button onClick={() => handleButtonClick(item.divNumber)} className={activeButton === item.divNumber ? "ExpereiencesBtn active" : "ExpereiencesBtn"}>
                          <a className={item.head}>{item.experience}</a></button>
                      )
                    })}
                  </ul>
              </div>
              
              <div className='experiencesShelfRight'>
                {currentDiv === 1 && <div >{ReserchIntern}</div>} 
                {currentDiv === 2 && <div >{FirstTechChallenge}</div>}
              </div>

          </div>
            

        </div>
    )
}


export default Experiences;