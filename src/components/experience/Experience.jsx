import React from 'react'
import './Experience.css'
import {FaWordpressSimple} from 'react-icons/fa'
import {AiOutlineHtml5, AiOutlineGithub} from 'react-icons/ai'
import {DiCss3Full, DiReact, DiPython} from 'react-icons/di'
import {SiJavascript, SiRedux} from 'react-icons/si'
import {ImGit} from 'react-icons/im'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>My Skills</h2>
      <div className="container experience__container">
        <article className='experience'>
          <div className='skillBadge'>
            <AiOutlineHtml5 className='experience__container__icon'/>
          </div>
            <h3>HTML</h3>
        </article>
        <article className='experience'>
          <div className='skillBadge'>
            <DiCss3Full className='experience__container__icon'/>
          </div>
            <h3>CSS</h3>
        </article>
        <article className='experience'>
          <div className='skillBadge'>
            <SiJavascript className='experience__container__icon'/>
          </div>
            <h3>Javascript</h3>
        </article>
        <article className='experience'>
          <div className='skillBadge'>
            <DiReact className='experience__container__icon'/>
          </div>
            <h3>React</h3>
        </article>
        <article className='experience'>
          <div className='skillBadge'>
            <SiRedux className='experience__container__icon'/>
          </div>
            <h3>Redux</h3>
        </article>
        <article className='experience'>
          <div className='skillBadge'>
            <ImGit className='experience__container__icon'/>
          </div>
            <h3>Git</h3>
        </article>
        <article className='experience'>
          <div className='skillBadge'>
            <AiOutlineGithub className='experience__container__icon'/>
          </div>
            <h3>Github</h3>
        </article>
        <article className='experience'>
          <div className='skillBadge'>
            <DiPython className='experience__container__icon'/>
          </div>
            <h3>Python</h3>
        </article>
        <article className='experience'>
          <div className='skillBadge'>
            <FaWordpressSimple className='experience__container__icon'/>
          </div>
            <h3>WordPress</h3>
        </article>
      </div>
    </section>
  )
}

export default Experience