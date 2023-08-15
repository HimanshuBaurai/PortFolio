import React, { useState } from 'react'
import './Navbar.scss'
import DarkMode from './DarkMode'

const Navbar = () => {
    // const hamburger=document.getElementsByClassName("hamburger");
    // const navMenu=document.getElementsByClassName("nav-menu");
    // hamburger.addEventListener('click',()=>{
    //     hamburger.classList.toggle('active');
    //     navMenu.classList.toggle('active');
    // })
    // const [menuOpen,setMenuOpen]=useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    return (
        <nav class="navbar">
            <div class="container">
                {/* <!-- Logo --> */}
                <h1 id="logo">
                    <a href="#"
                    >
                        <img src='logo.svg' alt="My Logo" />
                    </a>
                </h1>
                {/* <!-- Navbar links --> */}
                {/* <ul class="nav-menu"> */}
                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li><a class="nav-link" href="#projects" onClick={toggleMenu}>PROJECTS</a></li>
                    <li><a class="nav-link" href="#skills" onClick={toggleMenu}>SKILLS</a></li>
                    <li><a class="nav-link" href="#ContactCard" onClick={toggleMenu}>CONTACT</a></li>
                    <li><a class="nav-link" href="#journey" onClick={toggleMenu}>JOURNEY</a></li>
                    {/* <li>
                        <a
                            class="nav-link btn btn-primary"
                            href=""
                            target='_blank'
                        >RESUME <i class="fas fa-arrow-right"></i>
                        </a>
                    </li> */}

                    {/* <!-- Toggle switch --> */}
                    <DarkMode />
                </ul>
                {/* <div class="hamburger"> */}
                <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar