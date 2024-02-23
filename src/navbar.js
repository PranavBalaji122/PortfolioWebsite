import React, { Component, useState } from "react";
import {menuItems} from "./menuItems";
import './navbar.css';      


//changing the color of the navBar
const Navbar = () => {
    const [navBar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

const scrollToSection = (element) =>{
    window.scrollTo({
        top: element.current.offsetTop,
        behavior: 'smooth'
    })
}

    window.addEventListener('scroll', changeBackground);
// href={item.url}
    return (
        <nav className={navBar ? 'navbarItems active' : 'navbarItems'}>
            <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
            <ul className='nav-menu'>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <a className={item.cName} href= {item.url} > 
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;