import React from 'react'
import {BsLinkedin , BsGithub} from 'react-icons/bs'
import {SiFiverr} from 'react-icons/si'


const HeaderNav = () => {
  return (
    <div className='header__nav'>
        <a href="http://linkedin.com" target='_blank'><BsLinkedin/></a>
        <a href="http://github.com" target='_blank'><BsGithub/></a>
        <a href="http://fiverr.com" target='_blank'><SiFiverr/></a>
    </div>
  )
}

export default HeaderNav