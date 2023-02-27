import React from 'react'
import { useInView } from 'react-intersection-observer';
import './About.css'
import {BiCodeAlt} from 'react-icons/bi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import Phoenix from '../../assets/Phoenixblue.png'

const About = () => {
    const { ref: myRef, inView: IsVisible } = useInView(); 
  return (
   <section id='about'>
    <h2 className='title'>About Me</h2>

    <div className="container about__container">
        <div ref={myRef} className={`about__me slide-in slide-right ${IsVisible ? 'appear': ''}`}>
            <div className="about__me-image">
                <img src={Phoenix} alt="phoenix"/>
            </div>
        </div>
        <div ref={myRef} className={`about__content slide-in slide-left ${IsVisible ? 'appear' : ''}`}>
            <div className="about__cards">
                <article className='about__card'>
                    <BiCodeAlt className='about__icon'/>
                    <h5>Experience</h5>
                    <small>6+ Years Coding</small>
                </article>

                <article className='about__card'>
                    <AiOutlineFundProjectionScreen className='about__icon'/>
                    <h5>Projects</h5>
                    <small>15</small>
                </article>
            </div>
            <p>
                I began coding in my second job as machine operator at the age of 23. I have always enjoyed the constant learning and challenges that coding
                has put before me. In January 2022 I decided to expand my skills and began learning javascript and React.js on CodeCademy. I currently specialize
                in front-end development but I am always looking to pick up new skills and experience. If you have a project or a job opening you would like to 
                discuss I would be excited to talk with you.
                <br>
                </br>
                <br/>
                -Mark
            </p>

            <a href="#contact" className='btn btn-primary'>Email Me</a>
            
        </div>
    </div>
   </section>
  )
}

export default About