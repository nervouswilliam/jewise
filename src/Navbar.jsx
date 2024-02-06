import React from 'react';
import './Navbar.css';
import {
    Link,
    useMatch,
    useResolvedPath,
    NavLink,
}from "react-router-dom";

const Navbar = () => {
  return (
    <header>
        <nav className='navbar'>
            <Link to = "/" className='logo'>JEWISE</Link>
            <ul>
                <li>
                    <NavLink to = "/">Home</NavLink>
                </li>
                <li>
                    <NavLink to = "/about">About</NavLink>
                </li>
                <li>
                    <NavLink to = "/portfolio">Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to = "/experience">Experience</NavLink>
                </li>
                <li>
                    <NavLink to = "/contact">Contact</NavLink>
                </li>
            </ul>
            <button className='hireMe'>Hire Me</button>
        </nav>
    </header>
  )
}

export default Navbar
