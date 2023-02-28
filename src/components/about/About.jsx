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
            Hi there! I'm Mark, a front-end developer with a passion for coding. I first discovered my love for programming when I was working as a machine operator in my second job at the age of 23. Since then, I've been hooked on the constant learning and challenges that coding presents.
            <br />
            <br />
            In January 2022, I decided to expand my skill set and began learning JavaScript and React.js on Codecademy. Since then, I've been honing my front-end development skills and working on various projects to gain hands-on experience.
            <br />
            <br />
            My current specialization is in front-end development, but I'm always looking to pick up new skills and experiences. Whether it's learning a new framework or diving deeper into UX design, I'm always eager to expand my knowledge and grow as a developer.
            <br />
            <br />
            If you're looking for a passionate and dedicated front-end developer to join your team or collaborate on a project, I would be thrilled to chat with you. Let's work together to create amazing web experiences that captivate and engage users!
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