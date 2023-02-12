import React from 'react'
import CV from './cvitae.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download>Download CV</a>
            <a href="#contact">Hire me</a>
        </div>
    )
}

export default CTA

