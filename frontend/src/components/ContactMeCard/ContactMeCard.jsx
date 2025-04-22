import React from 'react';
import './ContactMeCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import SEO from '../SEO.jsx'; // Adjust the path based on your file structure

const ContactMeCard = () => {
  return (
    <>
      <SEO 
        title="Contact Himanshu Baurai | Full Stack Developer & AI Enthusiast"
        description="Get in touch with Himanshu Baurai, a Full Stack Developer and AI Enthusiast from Delhi Technological University. Let's connect and build something amazing together."
        keywords="Contact Himanshu Baurai, Hire Full Stack Developer, Delhi Developer, AI Engineer Contact, MERN Stack Developer Contact"
        image="/profile-pic.jpg"
        type="profile"
      >
        {/* Additional structured data for contact information */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Himanshu Baurai",
            "email": "himanshucosmicera@gmail.com",
            "sameAs": [
              "https://github.com/HimanshuBaurai",
              "https://www.linkedin.com/in/himanshu-baurai-283b4022a",
              "https://www.instagram.com/himanshu_baurai"
            ],
            "jobTitle": "Full Stack Developer & AI Enthusiast"
          })}
        </script>
      </SEO>
      
      <section id='ContactCard'>
        <div className="section-title">
          <h2>Get In Touch</h2>
          <div className="underline"></div>
          <p>Let's connect and build something amazing together</p>
        </div>
        
        <div className="contact-card">
          <div className="contact-card-inner">
            <div className='contact-card-front'>
              <div className="card-content">
                <div className="profile-img-container">
                  <img src="profile-pic.jpg" alt="Himanshu Baurai" className="profile-img" />
                </div>
                <h2>Himanshu Baurai</h2>
                <p className="role">Full Stack Developer & AI Enthusiast</p>
                <button className="flip-btn">
                  Hover Me
                </button>
              </div>
            </div>
            
            <div className='contact-card-back'>
              <div className="wave-emoji">👋</div>
              <h2>Let's Connect</h2>
              
              <p className="bio-quote">
                "A Tech Enthusiast with a Passion for Crafting Elegant Web Experiences."
              </p>
              
              <div className="contact-info">
                <a href="mailto:himanshucosmicera@gmail.com" className="email-link">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>himanshucosmicera@gmail.com</span>
                </a>
              </div>
              
              <div className="social-links">
                <a 
                  href="https://github.com/HimanshuBaurai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link github"
                  aria-label="GitHub Profile"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/himanshu-baurai-283b4022a" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                  aria-label="LinkedIn Profile"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                
                <a 
                  href="https://www.instagram.com/himanshu_baurai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link instagram"
                  aria-label="Instagram Profile"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMeCard;