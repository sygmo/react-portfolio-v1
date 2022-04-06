import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Sydney Mercier</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About Me</a></li>
        <li><a href='#experience'>My Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact Me</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/sydney-mercier/' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com/sygmo' target="_blank"><FaGithub /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Sydney Mercier. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer