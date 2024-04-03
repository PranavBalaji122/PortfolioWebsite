import React, {useState} from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer(){
    const handleGitClick = (url) =>{
        window.open(url)
        
    }

    return(
        <div className='FooterMain'>
            <h1 className='greyLineForFooter'></h1>
            <div className='FooterDiv'>
                <div className='nameDivForFooter'>
                    <h2>Pranav Balaji</h2>
                </div>
                <div>
                    <img className = 'gitHubButtonFooter' src='githubLogo.png'  onClick={() =>handleGitClick("https://github.com/PranavBalaji122")}></img>
                    <img className='linkdinButtonFooter' src='linkdinLogo.png' onClick={() =>handleGitClick("https://www.linkedin.com/in/pranav-balaji-b669a0265/")}></img>
                </div>
                
            </div>
        </div>
    )
}



export default Footer;