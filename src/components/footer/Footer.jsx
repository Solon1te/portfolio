import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import Phoenixbw from '../../assets/Phoenixbw.png'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://Linkedin.com"><BsLinkedin/></a>
      </div>

      <img src={Phoenixbw} className='footer__logo'/>

      <div className="footer__copyright">
        <small>&copy; Mark Dietrich all rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer