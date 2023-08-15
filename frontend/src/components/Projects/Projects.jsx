import React from 'react'
import './Projects.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
  return (
    <div id="projects">
      <div className='Pcontainer'>
        <h1 className='sub-title'>My Projects</h1>
        <div className='work-list'>
          <div className='work'>
            <img src='culturalAvenue.png' alt='G20 based project' />
            <div className='layer'>
              <h3>CulturalAvenue-G20</h3>
              <p>Embark on a captivating cultural journey with our G20 Culture Showcase, powered by the dynamic ReactJS framework.</p>
              <a href='https://github.com/HimanshuBaurai/Cultural-Avenue' target='_blank'><FontAwesomeIcon icon={faLink} shake /></a>
            </div>
          </div>
          <div className='work'>
            <img src='Ecommerce.png' alt='Ecommerce Fullstack' />
            <div className='layer'>
              <h3>BeyondBuy-FullStack Ecommerce Portal</h3>
              <p>Welcome to BeyondBuy, your gateway to an extraordinary shopping experience. Powered by the robust MERN stack, BeyondBuy is more than just an e-commerce platform.</p>
              <a href='https://github.com/HimanshuBaurai/Ecommerce-Project' target='_blank'><FontAwesomeIcon icon={faLink} shake /></a>
            </div>
          </div>
          <div className='work'>
            <img src='hotstar.png' alt='hotstar clone' />
            <div className='layer'>
              <h3>Hotstar Clone(HTML,CSS andJS only)</h3>
              <p>Introducing HotStream, your premium destination for top-notch entertainment, meticulously crafted using HTML, CSS, and JS. </p>
              <a href='https://github.com/HimanshuBaurai/Web-Dev-Clones-Practice/tree/master/HOTSTAR%20CLONE' target='_blank'><FontAwesomeIcon icon={faLink} shake /></a>
            </div>
          </div>
        </div>
        <a href='https://github.com/HimanshuBaurai' target='_blank' className='btn'>See more..</a>
      </div>
    </div>
  )
}

export default Projects