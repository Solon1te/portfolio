import React from 'react'
import Resume from ''

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href="tel:7172082175" className='btn btn-primary'>Call Me</a>
    </div>
  )
}

export default CTA