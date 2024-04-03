import './Projects.css'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import React, {useState} from 'react';


function Projects(){
    const flappyBirdDiv = 
    <div>
        <div className='EachProjectDiv'>
            <div className='imageDivForProjects'>
                <img  className="imageForProjectsSection" src="flappyBirdNewBetter.png"/>
            </div>
            <div className='RestOfInfoForProjectsSection'>
                <div>
                    <h1>Flappy Bird Project</h1>
                    <h3 className='SubTextForProjects'>Used Java to recreate the popular game Flappy Bird, with obstacle generation and score tracking</h3>
                </div>
                <div>
                    <img className = 'gitHubButton' src='githubLogo.png'></img>
                </div>
            </div>
        </div>    
    </div>
    const secondProj = 
    <div>
        <div className='EachProjectDiv'>
            <div className='imageDivForProjects'>
                <img  className="imageForProjectsSection" src="flappyBirdNewBetter.png"/>
            </div>
            <div className='RestOfInfoForProjectsSection'>
                <div>
                    <h1>secondProj</h1>
                    <h3 className='SubTextForProjects'>Used Java to recreate the popular game Flappy Bird, with obstacle generation and score tracking</h3>
                </div>
                <div>
                    <img className = 'gitHubButton' src='githubLogo.png'></img>
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
                <div>{flappyBirdDiv}</div>
                <div>{secondProj}</div>
            </div>
            


        </div>
    )
}


export default Projects;