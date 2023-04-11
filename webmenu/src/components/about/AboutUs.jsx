import React, { Component } from 'react';
import './AboutUs.css';
import about from '../../data';

class AboutUs extends Component {
  render() {
    return (
      <section className='aboutUs__container' id='aboutUs'>
        <h2 className='aboutUs__title' >Sobre nós</h2>
        <article className='aboutUs__article'>
          <span className='aboutUs__text'>{about.text}</span>
        </article>
        <hr />
      </section>
    )
  }
}

export default AboutUs