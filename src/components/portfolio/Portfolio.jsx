import React from 'react'
import './Portfolio.css'
import tetris from '../../assets/Tetris.png'
import calculator from '../../assets/calculator.png'
import spotify from '../../assets/Spotify.png'
import portfolio from '../../assets/portfolio.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>My Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item__image"></div>
          <h3>Tetris</h3>
          <img src={tetris} alt="" />
          <a href="https://github.com/Solon1te/Tetris" className='btn' target='blank'>Github</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item__image"></div>
          <h3>Personal Portfolio</h3>
          <img src={portfolio} alt="" />
          <a href="https://github.com/Solon1te/Personal_portfolio" className='btn' target='blank'>Github</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item__image"></div>
          <h3>Calculator</h3>
          <img src={calculator} alt="" />
          <a href="https://github.com/Solon1te/Calculator" className='btn' target='blank'>Github</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item__image"></div>
          <h3>Spotify Playlist API</h3>
          <img src={spotify} alt="" />
          <a href="https://github.com/Solon1te/Tetris" className='btn' target='blank'>Github</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio