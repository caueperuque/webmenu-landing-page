import React, { Component } from 'react'
import hero from '../../images/hero.png'
import './Hero.css'

class Hero extends Component {
  render() {
    return (
      <div>
        <img src={hero} alt='hero' className='hero'/>
      </div>
    )
  }
}

export default Hero