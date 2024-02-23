import React, { Component, useState } from "react";
import {menuItems} from "./menuItems";
import './navbar.css';      


//changing the color of the navBar
const Navbar = () => {
    


   
// href={item.url}
    return (
        <div className="navbarItems">         
            <h1 className="navbar-logo">PB<i className="fab fa-react"></i></h1>
            <ul className='navMenu'>
                <li>
                    <a className="nav-links">Home</a>
                    <a className="nav-links">About Me</a>
                    <a className="nav-links">Experience</a>
                    <a className="nav-links">Projects</a>
                </li>
            </ul>

        </div>
    );
}

export default Navbar;