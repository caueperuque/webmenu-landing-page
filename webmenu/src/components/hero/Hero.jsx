import React, { Component } from 'react'
import hero from '../../images/hero.png'
import './Hero.css'

class Hero extends Component {
  render() {
    return (
      <div className='sla'>
        <div className='hero__background' id='header-hero'>
          <img src={hero} alt='hero' className='hero'/>
        </div>
      </div>
    )
  }
}

export default Hero