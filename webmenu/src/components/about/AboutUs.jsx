import React, { Component } from 'react';
import './AboutUs.css';
import about from '../../data';

class AboutUs extends Component {
  render() {
    return (
      <section className='aboutUs__container'>
        <h2 className='aboutUs__title'>Sobre nós</h2>
        <article className='aboutUs__article'>
          <p className='aboutUs__text'>{about.text}</p>
        </article>
        <hr />
      </section>
    )
  }
}

export default AboutUs