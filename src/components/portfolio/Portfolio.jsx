import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Some Jobs I Have Completed</h5>
      <h2>My Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item__image"></div>
          <h3>Tetris</h3>
          <a href="https://github.com/Solon1te/Tetris" className='btn' target='blank'>Github</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item__image"></div>
          <h3>Personal Portfolio</h3>
          <a href="https://github.com/Solon1te/Personal_portfolio" className='btn' target='blank'>Github</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item__image"></div>
          <h3>Calculator</h3>
          <a href="https://github.com/Solon1te/Calculator" className='btn' target='blank'>Github</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item__image"></div>
          <h3>Spotify Playlist API</h3>
          <a href="https://github.com/Solon1te/Tetris" className='btn' target='blank'>Github</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio