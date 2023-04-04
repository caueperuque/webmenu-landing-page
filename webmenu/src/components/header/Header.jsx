import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
  render() {
    return (
      <header className='container__flex header'>
        <img src="" alt="" />
        <h1>Web Menu</h1>
        <nav>
          <ul>
            <li id="about-us__li">Sobre nós</li>
            <li id="about-web-menu__li">O que são os Menus Web?</li>
            <li id="portfolio__li">Portfólio</li>
            <li id='contact-us__li'>Entre em contato</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
