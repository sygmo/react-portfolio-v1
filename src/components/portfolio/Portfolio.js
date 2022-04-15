import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Garden Proud',
    github: 'https://github.com/sygmo/garden-proud',
    demo: 'https://garden-proud-2022.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Stellar Sights',
    github: 'https://github.com/sygmo/stellar-sights',
    demo: 'https://sygmo.github.io/stellar-sights/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Social Network API',
    github: 'https://github.com/sygmo/social-network-api',
    demo: 'https://drive.google.com/file/d/1Oh_MTAa0cQ3r1EEqbF2V71J1ZwmS8JgO/view'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Ecommerce Back-End',
    github: 'https://github.com/sygmo/e-commerce-back-end',
    demo: 'https://drive.google.com/file/d/1v88MgQ4oZ-uXeHyXHir1d4ustCv5csdI/view'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Employee Tracker',
    github: 'https://github.com/sygmo/employee-tracker',
    demo: 'https://drive.google.com/file/d/1S-y2Bp7Bry0LRsliNndrxPWtUv6Ytjct/view'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Weather Dashboard',
    github: 'https://github.com/sygmo/weather-dashboard',
    demo: 'https://sygmo.github.io/weather-dashboard/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio