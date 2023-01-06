import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='me' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>25+ Completed Projects</small>
            </article>
          </div>

          <p>
            Full-stack web developer with computer science background from the University of Texas at Austin. Recently earned certificates in full-stack development from UT Austin and SMU coding bootcamps, with newly developed skills in Java, Spring, JavaScript, React, and responsive web design. Passionate about discovering innovative solutions to programming challenges and mobile-first development. I look forward to utilizing my skills as part of a team that values lifelong learning and quality engineering.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About