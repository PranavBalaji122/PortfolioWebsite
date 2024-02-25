import React, { Component, useState } from "react";
import {menuItems} from "./menuItems";
import './navbar.css';      
import { Link, animateScroll as scroll } from 'react-scroll';


//changing the color of the navBar
const Navbar = () => {
    const scrollToAboutMe = () =>{
        
        scroll.scrollTo("aboutMeSection", {smooth: true, duration: 1000 });
    };
    const scrollToHome = () =>{    
        scroll.scrollTo("HomeSection", {smooth: true, duration: 500 });
   };


   
// href={item.url}
    return (
        <div className="navbarItems">         
            <h1 className="navbar-logo">PB<i className="fab fa-react"></i></h1>
            <ul className='navMenu'>
                <li>
                <Link to="HomeSection" smooth={true} duration={500}>  <a className="nav-links" onClick={scrollToHome}>Home</a> </Link>
                    <Link to="aboutMeSection" smooth={true} duration={1000}>  <a className="nav-links" onClick={scrollToAboutMe}>About Me</a> </Link>
                    <a className="nav-links">Experience</a>
                    <a className="nav-links">Projects</a>
                </li>
            </ul>

        </div>
    );
}

export default Navbar;