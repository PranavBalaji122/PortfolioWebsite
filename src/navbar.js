import React, { Component, useState} from "react";
import {menuItems} from "./menuItems";
import './navbar.css';      
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';




//changing the color of the navBar
const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    const scrollToAboutMe = () =>{
        
        scroll.scrollTo("aboutMeSection", {smooth: true, duration: 1000 });
        setClicked(false); // Close the menu after clicking on a link
    };
    const scrollToHome = () =>{    
        scroll.scrollTo("HomeSection", {smooth: true, duration: 500 });
        setClicked(false); // Close the menu after clicking on a link
   };

   const scrollToExperience = () =>{
        scroll.scrollTo("ExperienceSection", {smooth: true, duration: 500 });
        setClicked(false); // Close the menu after clicking on a link
   }
   const scrollToProjects = () =>{
    scroll.scrollTo("ProjectsSection", {smooth: true, duration: 500 });
    setClicked(false); // Close the menu after clicking on a link
}




   
// href={item.url}
    return (
        <div className="navbarItems">         
              <Link to="HomeSection" smooth={true} duration={500}> <h1 className="navbar-logo">PB<i className="fab fa-react"></i></h1></Link>
            <div className={`Menu-Icon ${clicked ? 'active' : ''}`} onClick={handleClick}>
                <FontAwesomeIcon icon={clicked ? faTimes : faBars} />
            </div>
            <ul  className={`navMenu ${clicked ? 'active' : ''}`}>
                <li>
                    <Link to="HomeSection" smooth={true} duration={500}>  <a className="nav-links" onClick={scrollToHome}>Home</a> </Link>
                    <Link to="aboutMeSection" smooth={true} duration={1000}  offset={-220}>  <a className="nav-links" onClick={scrollToAboutMe}>About Me</a> </Link>
                    <Link to="experiencesSection" smooth={true} duration={1000} offset={-220}>  <a className="nav-links" onClick={scrollToExperience}>Experience</a></Link>
                    <Link to="projectsSection" smooth={true} duration={1000} offset={-220}>  <a className="nav-links" onClick={scrollToProjects}>Projects</a></Link>
                </li>
            </ul>

        </div>
    );
}

export default Navbar;