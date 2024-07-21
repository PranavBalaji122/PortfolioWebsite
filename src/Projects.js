import './Projects.css'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import React, {useState} from 'react';


function Projects(){

    const openWebsite = (website) => { 
        window.open(website, '_blank'); 
      };


    const flappyBirdDiv = 
    <div>
        <div className='EachProjectDiv'>
            <div className='imageDivForProjects'>
                <img  className="imageForProjectsSection" src="flappyBirdNewBetter.png"/>
            </div>
            <div className='RestOfInfoForProjectsSection'>
                <div>
                    <h1>Flappy Bird Project</h1>
                    <h3 className='SubTextForProjects'>Used Java to recreate the popular game Flappy Bird, with obstacle generation and score tracking!</h3>
                </div>
                <div>
                    <img className = 'gitHubButton' src='githubLogo.png'></img>
                </div>
            </div>
        </div>    
    </div>
    const FullStackMovieProj = 
    <div>
        <div className='EachProjectDiv'>
            <div className='imageDivForProjects'>
                <img  className="imageForProjectsSection" src="flappyBirdNewBetter.png"/>
            </div>
            <div className='RestOfInfoForProjectsSection'>
                <div>
                    <h1>FullStack - Movie Library Project</h1>
                    <h3 className='SubTextForProjects'>Developed an full-stack web application that utilizes Django and React Js to deliver personalized movie recommendations through a custom machine learning model, utilizing Python, Pandas , and Scikit-Learn for data processing and model development</h3>
                </div>
                <div>
                    <img className = 'gitHubButton' src='githubLogo.png' onClick={() => openWebsite('https://github.com/PranavBalaji122/Movie-Recomandation-App')}></img>
                </div>
            </div>
        </div>    
    </div>

    const HousePricePredictor = 
    <div>
        <div className='EachProjectDiv'>
            <div className='imageDivForProjects'>
                <img  className="imageForProjectsSection" src="flappyBirdNewBetter.png"/>
            </div>
            <div className='RestOfInfoForProjectsSection'>
                <div>
                    <h1>House Price Predictor</h1>
                    <h3 className='SubTextForProjects'>Developed a house price prediction application using Boston’s housing market with over 1000 houses to create machine learning algorithms, achieving a mean squared error of 67.5 and R2 score of 0.15
                    </h3>
                </div>
                <div>
                    <img className = 'gitHubButton' src='githubLogo.png' ></img>
                </div>
            </div>
        </div>    
    </div>
    
    return(
        <div className='ProjectsMain' id = "projectsSection">
            <div className="ProjectsHeaderDiv" id = "ExperienceSection">
                <h1>Projects</h1>
                <h1 className='TinyLineUnder'></h1>
            </div>

            <div className='allProjectsDiv'>
                <div>{FullStackMovieProj}</div>
                <div>{HousePricePredictor}</div>
                <div>{flappyBirdDiv}</div>
            </div>
            


        </div>
    )
}


export default Projects;