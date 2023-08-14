import React from 'react'
import './Navbar.scss'
import DarkMode from './DarkMode'

const Navbar = () => {
    return ( 
        <nav class="navbar">
            <div class="container">
                {/* <!-- Logo --> */}
                <h1 id="logo">
                    <a href="https://github.com/HimanshuBaurai"
                    >
                    <img src='logo.svg' alt="My Logo"/>
                    </a>
                </h1>
                {/* <!-- Navbar links --> */}
                <ul class="nav-menu">
                    <li><a class="nav-link" href="#projects">PROJECTS</a></li>
                    <li><a class="nav-link" href="#skills">SKILLS</a></li>
                    <li><a class="nav-link" href="#ContactCard">CONTACT</a></li>
                    <li><a class="nav-link" href="#journey">JOURNEY</a></li>
                    <li>
                        <a
                            class="nav-link btn btn-primary"
                            href="https://drive.google.com/file/d/1KUfGm-jsXfaeKN5ngJfZPG2vH0KE-p93/view?usp=drive_link"
                            target='_blank'
                        >RESUME <i class="fas fa-arrow-right"></i>
                        </a>
                    </li>

                </ul>
                    {/* <!-- Toggle switch --> */}
                    <DarkMode/> 
                <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar