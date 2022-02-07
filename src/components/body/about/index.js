import React from 'react'
import SocialContact from '../../common/social-media'
import './about.css'

function About() {
  return (
    <div className='about'>
      <div className='about-top'>
        <div className='about-info'>
            Hey There , I am 
            <br /> <span className='info-name'>Venkatesh</span>
            <br /> I am a graduate student at UCI.
        </div>
        <div className='about-photo'>
            <img src={require('../../../assets/about.png')} className='picture' />
        </div>
      </div>
      <SocialContact />
    </div>
  )
}

export default About
