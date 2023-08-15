import React from 'react'
import './Skills.scss'

const Skills = () => {
  return (
    <div id='skills'>
      <h1>Skills</h1>
      <div className='Scontainer'>
        <div className='skills'>
          <h2>HTML</h2>
          <div className='progressBar'>
            <div className='html'>
              <span>86%</span>
            </div>
          </div>
          <h2>CSS</h2>
          <div className='progressBar'>
            <div className='css'>
              <span>74%</span>
            </div>
          </div>
          <h2>JavaScript</h2>
          <div className='progressBar'>
            <div className='js'>
              <span>70%</span>
            </div>
          </div>
          <h2>ReactJS</h2>
          <div className='progressBar'>
            <div className='react'>
              <span>71%</span>
            </div>
          </div>
          <h2>NodeJS & ExpressJS</h2>
          <div className='progressBar'>
            <div className='node'>
              <span>69%</span>
            </div>
          </div>
          <h2>Git/GitHub</h2>
          <div className='progressBar'>
            <div className='git'>
              <span>63%</span>
            </div>
          </div>
          <h2>C/C++</h2>
          <div className='progressBar'>
            <div className='c'>
              <span>89%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills