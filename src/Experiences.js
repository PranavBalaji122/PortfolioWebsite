import './Experiences.css'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import React, {useState} from 'react';


function Experiences(){
  const [currentDiv, setCurrentDiv] = useState(1);

  const handleButtonClick = (divNumber) => {
    setCurrentDiv(divNumber);
  }

  const expereinces = [
    {
        head:"Expereince",
        experience:"First Tech Challenge",
        divNumber: 1
    },
    {
        head:"Expereince",
        experience:"expereince1",
        divNumber: 2
    },
    {
        head:"Expereince",
        experience:"expereince1",
        divNumber: 3
    },
  ]


  const div1Content = 
      <div>
        <h2>First Tech Challenge Team 15089</h2>
        <span>September 2018</span>

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
                          <button className="ExpereiencesBtn" onClick={() => handleButtonClick(item.divNumber)}><a className={item.head}>{item.experience}</a></button>
                      )
                    })}
                  </ul>
              </div>
              

              {currentDiv === 1 && <div >{div1Content}</div>}
              {currentDiv === 2 && <div>Content of Div 2</div>}
              {currentDiv === 3 && <div>Content of Div 3</div>}     


          </div>
            

        </div>
    )
}


export default Experiences;