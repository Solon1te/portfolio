import React from 'react'
import './Experience.css'
import {FaWordpressSimple} from 'react-icons/fa'
import {AiOutlineHtml5, AiOutlineGithub} from 'react-icons/ai'
import {DiCss3Full, DiReact} from 'react-icons/di'
import {SiJavascript, SiRedux} from 'react-icons/si'
import {ImGit} from 'react-icons/im'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>My Skills</h2>
      <h5>I Have Practice Working With</h5>
      <div className="container experience__container">
        <article className="experience">
          <AiOutlineHtml5 className='experience__container__icon'/>
          <h4>HTML</h4>
        </article>
        <article className="experience">
          <DiCss3Full className='experience__container__icon'/>
          <h4>CSS</h4>
        </article>
        <article className="experience">
          <SiJavascript className='experience__container__icon'/>
          <h4>Javascript</h4>
        </article>
        <article className="experience">
          <DiReact className='experience__container__icon'/>
          <h4>React</h4>
        </article>
        <article className="experience">
          <SiRedux className='experience__container__icon'/>
          <h4>Redux</h4>
        </article>
        <article className="experience">
          <ImGit className='experience__container__icon'/>
          <h4>Git</h4>
        </article>
        <article className="experience">
          <AiOutlineGithub className='experience__container__icon'/>
          <h4>Github</h4>
        </article>
        <article className="experience">
          <FaWordpressSimple className='experience__container__icon'/>
          <h4>WordPress</h4>
        </article>
      </div>
    </section>
  )
}

export default Experience