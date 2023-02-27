import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderNav from './HeaderNav'
import Phoenix from '../../assets/Phoenixblue.png'
import {BsFillArrowDownSquareFill} from 'react-icons/bs'

const Header = () => {
  return (
    <header>
      <div className="phoenix-container">
        <img src={Phoenix} alt="Phoenix" className='phoenix'/>
      </div>
      <div className="container header__container">
          <h1>Mark Dietrich</h1>
          <h5 className= 'text-light'>Front-End Developer</h5>
          
          <small>Phone: (717)208-2175</small>
          <small>Email: MarkADietr@gmail.com</small>
          <HeaderNav/>
          <CTA/>
          <BsFillArrowDownSquareFill className='arrow'/> 
      </div>
    </header>
  )
}

export default Header