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
            <img src='VeganNexusImage.png' alt='THE VEGAN NEXUS' />
            <div className='layer'>
              <h3>THE VEGAN NEXUS</h3>
              <p>At the heart of our vegan haven lies a celebration of cruelty-free choices that resonate beyond the plate.</p>
              <a href='https://vegan-nexus-frontend.vercel.app' target='_blank'><FontAwesomeIcon icon={faLink} shake /></a>
            </div>
          </div>
          <div className='work'>
            <img src='KnowledgeFlowImage.png' alt='KnowledgeFlow' />
            <div className='layer'>
              <h3>KnowledgeFlow</h3>
              <p>Unlock your potential with Knowledge Flow. Subscribe for high-quality courses and enhance your skills in various domains.</p>
              <a href='https://knowledge-flow-online-course-platform-frontend.vercel.app/' target='_blank'><FontAwesomeIcon icon={faLink} shake /></a>
            </div>
          </div>
          <div className='work'>
            <img src='hotstar.png' alt='hotstar clone' />
            <div className='layer'>
              <h3>Hotstar Clone(HTML,CSS andJS only)</h3>
              <p>Introducing Disney+Hotstar, your premium destination for top-notch entertainment, meticulously crafted using HTML, CSS, and JS. </p>
              <a href='https://hotstar-clone-nine-pink.vercel.app/' target='_blank'><FontAwesomeIcon icon={faLink} shake /></a>
            </div>
          </div>
        </div>
        <a href='https://github.com/HimanshuBaurai' target='_blank' className='btn'>See more..</a>
      </div>
    </div>
  )
}

export default Projects