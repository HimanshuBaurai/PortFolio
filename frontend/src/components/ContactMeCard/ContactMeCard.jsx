import React from 'react'
import './ContactMeCard.scss'

const ContactMeCard = () => {
  return (
    <div id='ContactCard'>
      <div className="contact-card">
        <div className="contact-card-inner">
          <div className='contact-card-inner-front'>
            <h2>Himanshu Baurai</h2>
            <p>Full Stack Web Developer</p>
            <button>Hover Me</button>
          </div>
          <div className='contact-card-inner-back'>
            <img src={'./waving-hand.png'} alt="waving hand" />
            <h1>Himanshu <span>Baurai</span></h1>
            <div>
              <p>"A Tech Enthusiast with a Passion for Crafting Elegant Web Experiences."</p>
              <span>Currently in 3rd Yr.</span>
            </div> 

            <div className='row'>
              <button>Follow</button>
              <a href='https://www.linkedin.com/in/himanshu-baurai-283b4022a'><img src={'./icons8-linkedin-100.png'} alt="LinkedIn icon" /></a>
              <a href='https://www.instagram.com/himanshu_baurai'><img src={'./instagram.png'} alt="Instagram icon" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMeCard