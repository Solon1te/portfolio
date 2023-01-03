import React from 'react'
import {BsLinkedin , BsGithub} from 'react-icons/bs'
import {SiFiverr} from 'react-icons/si'


const HeaderNav = () => {
  return (
    <div className='header__nav'>
        <a href="https://www.linkedin.com/in/mark-dietrich/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Solon1te" target='_blank'><BsGithub/></a>
        <a href="http://fiverr.com" target='_blank'><SiFiverr/></a>
    </div>
  )
}

export default HeaderNav