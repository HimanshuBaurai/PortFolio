// import React, { useState } from 'react'
// import './Navbar.scss'
// import DarkMode from './DarkMode'

// const Navbar = () => {
//     const [isMenuOpen, setMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setMenuOpen(!isMenuOpen);
//     };
//     return (
//         <nav className="navbar">
//             <div className="container">
//                 <h1 id="logo">
//                     <a href="#"
//                     >
//                         <img src='logo.svg' alt="My Logo" />
//                     </a>
//                 </h1>
//                 <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
//                     <li><a className="nav-link" href="#projects" onClick={toggleMenu}>PROJECTS</a></li>
//                     <li><a className="nav-link" href="#skills" onClick={toggleMenu}>SKILLS</a></li>
//                     <li><a className="nav-link" href="#ContactCard" onClick={toggleMenu}>CONTACT</a></li>
//                     <li><a className="nav-link" href="#journey" onClick={toggleMenu}>JOURNEY</a></li>
//                     {/* <li>
//                         <a
//                             className="nav-link btn btn-primary"
//                             href="#"
//                             target='_blank'
//                             rel="noreferrer"
//                         >RESUME <i className="fas fa-arrow-right"></i>
//                         </a>
//                     </li> */}

//                     <DarkMode />
//                 </ul>
//                 <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
//                     <span className="bar"></span>
//                     <span className="bar"></span>
//                     <span className="bar"></span>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Navbar

import React, { useState, useRef, useEffect } from 'react'
import './Navbar.scss'
import DarkMode from './DarkMode'

const Navbar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);
    const hamburgerRef = useRef(null);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    // Handle clicks outside the sidebar
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Close sidebar if click is outside sidebar and not on hamburger
            if (
                isSidebarOpen && 
                sidebarRef.current && 
                !sidebarRef.current.contains(event.target) &&
                hamburgerRef.current && 
                !hamburgerRef.current.contains(event.target)
            ) {
                closeSidebar();
            }
        };

        // Add event listener when sidebar is open
        document.addEventListener('mousedown', handleClickOutside);
        
        // Clean up event listener on unmount or when dependency changes
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSidebarOpen]);

    // Prevent scrolling when sidebar is open
    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Clean up when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isSidebarOpen]);

    return (
        <nav className="navbar">
            <div className="container">
                <h1 id="logo">
                    <a href="#">
                        <img src='logo.svg' alt="My Logo" />
                    </a>
                </h1>
                <div className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`} onClick={closeSidebar}></div>
                <ul className={`nav-menu sidebar ${isSidebarOpen ? 'active' : ''}`} ref={sidebarRef}>
                    <div className="sidebar-header">
                        <h2>Menu</h2>
                        {/* <button className="close-sidebar" onClick={closeSidebar}>
                            <span></span>
                            <span></span>
                        </button> */}
                    </div>
                    <li><a className="nav-link" href="#journey" onClick={closeSidebar}>JOURNEY</a></li>
                    <li><a className="nav-link" href="#skills" onClick={closeSidebar}>SKILLS</a></li>
                    <li><a className="nav-link" href="#projects" onClick={closeSidebar}>PROJECTS</a></li>
                    <li><a className="nav-link" href="#ContactCard" onClick={closeSidebar}>CONTACT</a></li>
                    {/* <li>
                        <a
                            className="nav-link btn btn-primary"
                            href="#"
                            target='_blank'
                            rel="noreferrer"
                        >RESUME <i className="fas fa-arrow-right"></i>
                        </a>
                    </li> */}

                    <DarkMode />
                </ul>
                <div 
                    className={`hamburger ${isSidebarOpen ? 'active' : ''}`} 
                    onClick={toggleSidebar}
                    ref={hamburgerRef}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar
