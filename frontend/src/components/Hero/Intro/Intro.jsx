import React from 'react'
import './Intro.scss'
import Navbar from '../Navbar/Navbar'

const Intro = () => {
  return (
    <header id='hero'>
      <Navbar />

      <section class="header-container">
        <img
          class="profile-image"
          src="profile-pic.jpg"
          alt="profile-pic"
        />
        <h1>Hi, I'm Himanshu Baurai</h1> <span class="waving" data-hover="👋"></span>

        <div class="content-text">
          <h2>An Undergraduate At <span>Delhi Technological University</span></h2>
          {/* <h2>products, brands, and experience.</h2> */}

          <p>
            A Full Stack Developer, playing around with some vivid colors of technology.
          </p>
        </div>
        <a
          href="#ContactCard"
          class="btn btn-secondary connect-btn"
          target="_blank"
        >Connect With Me</a>
      </section>

    </header>
  )
}

export default Intro