import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMail />
            <h4>Email</h4>
            <h5>sydney.mercier91@gmail.com</h5>
            <a href='mailto:sydney.mercier91@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin />
            <h4>LinkedIn</h4>
            <h5>Sydney Mercier</h5>
            <a href='https://www.linkedin.com/in/sydney-mercier/' target='_blank'>Send a message</a>
          </article>
        </div>

        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact