import React, { Component } from 'react';
import aboutUs from '../../data';
import './MenuWeb.css'

class MenuWeb extends Component {
  render() {
    return (
      <section className='menuweb__container' id='menuweb'>
        <h2 className='menuweb__title'>O que são Menus Web?</h2>
        <article className='menuweb__article'>
          <span className='menuweb__text'>{aboutUs.menuweb}</span>
        </article>
        <hr />
      </section>
    );
  }
}

export default MenuWeb;