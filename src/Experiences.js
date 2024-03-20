import './Experiences.css'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";



function Experiences(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };    

    const expereinces = [
        {
            head:"ExperienceCard",
            experience:"expereince1"
        },
        {
            head:"ExperienceCard",
            experience:"expereince1"
        },
        {
            head:"ExperienceCard",
            experience:"expereince1"
        },
    ]

   


    return(
        <div className="ExperiencesMain" id = "experiencesSection">
            <div className="ExperiencesHeaderDiv" id = "ExperienceSection">
                <h1>Experiences</h1>
                <h1 className='TinyLineUnder'></h1>
            </div>


            <div className="CarsouelDiv">
                <Carousel responsive={responsive}>
                    <div className='Card'>
                        <div className='cardHeader'>
                             
                             <img src='firstLogo.png' className="firstLogo"></img>    
                             <h2>First Tech Challenge</h2>
                          
                      </div>
                        <div>
                            f
                        </div>
                    </div>
                    
                    <div>item1</div>
                    <div>item1</div>
                    <div>item1</div>
                   
                    
              </Carousel>
            </div>

        </div>
    )
}


export default Experiences;