import React, { useEffect, useRef } from 'react';
import './Intro.scss';
import Navbar from '../Navbar/Navbar';
import SEO from '../../SEO.jsx'; // Adjust the path based on your file structure

const Intro = () => {
  const textRef = useRef(null);
  
  useEffect(() => {
    // Simple typing effect for the role text
    const roles = ["Full Stack Developer", "AI Enthusiast", "Problem Solver"];
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentRole = roles[currentRoleIndex];
      
      if (isDeleting) {
        if (textRef.current) {
          textRef.current.textContent = currentRole.substring(0, currentCharIndex - 1);
          currentCharIndex--;
        }
        typingSpeed = 50;
      } else {
        if (textRef.current) {
          textRef.current.textContent = currentRole.substring(0, currentCharIndex + 1);
          currentCharIndex++;
        }
        typingSpeed = 100;
      }
      
      if (!isDeleting && currentCharIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1000; // Pause at the end
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
      }
      
      setTimeout(type, typingSpeed);
    };
    
    type();
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <>
      <SEO 
        title="Himanshu Baurai - Full Stack Developer & AI Enthusiast | DTU Graduate"
        description="Portfolio of Himanshu Baurai, a Computer Engineering student at Delhi Technological University. Specializing in Full Stack Development, AI, and innovative problem-solving."
        keywords="Himanshu Baurai, Full Stack Developer, AI Enthusiast, DTU, Delhi Technological University, MERN Stack, React Developer, Portfolio"
        image="/profile-pic.jpg"
      >
        {/* Homepage specific structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "mainEntity": {
              "@type": "Person",
              "name": "Himanshu Baurai",
              "description": "Full Stack Developer & AI Enthusiast, undergraduate at Delhi Technological University",
              "image": window.location.origin + "/profile-pic.jpg",
              "sameAs": [
                "https://github.com/HimanshuBaurai",
                "https://www.linkedin.com/in/himanshu-baurai-283b4022a",
                "https://www.instagram.com/himanshu_baurai"
              ],
              "knowsAbout": ["Full Stack Development", "AI", "MERN Stack", "Problem Solving"],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Delhi Technological University",
                "sameAs": "https://dtu.ac.in/"
              }
            }
          })}
        </script>
      </SEO>
      
      <header id='hero' className="theme-transition">
        <Navbar />

        <section className="header-container">
          <div className="profile-image-container">
            <img
              className="profile-image"
              src="profile-pic.jpg"
              alt="Himanshu Baurai - Full Stack Developer and AI Enthusiast"
            />
            <div className="profile-backdrop"></div>
          </div>
          
          <div className="intro-content">
            <div className="greeting-container">
              <h1>Hi, I'm <span className="name">Himanshu Baurai</span></h1>
              <div className="waving-hand">👋</div>
            </div>
            
            <div className="role-container">
              <p className="role-prefix">I'm a</p>
              <p className="role-text" ref={textRef}></p>
              <div className="cursor"></div>
            </div>
            
            <div className="content-text">
              <h2>Undergraduate at <span>Delhi Technological University</span></h2>
              <p className="bio">
                Crafting innovative solutions at the intersection of AI and web development.
                Passionate about building products that make a difference.
              </p>
            </div>
            
            <div className="cta-container">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#ContactCard" className="btn btn-secondary connect-btn">Connect With Me</a>
            </div>
            
            <div className="scroll-indicator">
              <div className="mouse">
                <div className="wheel"></div>
              </div>
              <div className="arrow">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Intro;