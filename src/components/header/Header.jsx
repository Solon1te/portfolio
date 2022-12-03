import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderNav from './HeaderNav'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h1>Mark Dietrich</h1>
            <h5 className= 'text-light'>Front-End Developer</h5>
            <HeaderNav/>
            <CTA/> 
        </div>
    </header>
  )
}

export default Header