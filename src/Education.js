import React from "react";
import './Education.css';      

const Education = () => {
    const openLink = (url) => {
        window.open(url,"_blank", "noreferrer")
      }
          

    return(    
        
        <div>
        <div className="InfoListDiv">
        <ul className="InfoList">
            <li>
                <strong className="name">Name: </strong>
                <span>  Pranav Balaji</span>
            </li>
            <li>
                <strong className="name">School: </strong>
                <span>Advnaced Math and Science Academy</span>
            </li>
            <li>
                <strong className="name">Age:   </strong>
                <span>17</span>
            </li>
            <li>
                <strong className="name">Hometown: </strong>
                <span>Marlborough, MA</span>
            </li>
        </ul>
        <button onClick={() =>{
            openLink("https://google.com")
          }} className="gitHubBtn"> <img src="githubLogo-modified.png" className="image"/></button>    
           <button onClick={() =>{
            openLink("https://google.com")
          }} className="linkdinBtn"> <img src="linkdinLogo.png" className="image"/></button>    
        </div>
        <div className="AboutMeText">
            <p className="Section">
    info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info </p>
            <p className="Section">
    
    info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info section info </p>
        </div>

    </div>
    );
}
export default Education;
