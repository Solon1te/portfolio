import React from 'react'
import './Contact.css'
import {MdEmail} from 'react-icons/md'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail className='.contact__option-icon'/>
            <h4>Email</h4>
            <h5>MarkADietr@gmail.com</h5>
            <a href="mailto:MarkADietr@gmail.com" target='blank'>Send A Message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='Name' placeholder='Your Name' required />
          <input type="text" name='Email' placeholder='Your Email' required/>
          <textarea name="message" rows="5" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  ) 
}

export default Contact