import React, { Component } from 'react';
import './Header.css';
import logo from '../../images/logo.png'

class Header extends Component {
  render() {
    return (
      <header className="container__flex header">
          <img src={logo} alt="logo" className='logo' />
        <nav>
          <ul className="navbar">
            <li id="about-us__li">Sobre nós</li>
            <li id="about-web-menu__li">Menus Web</li>
            <li id="portfolio__li">Portfólio</li>
            <li id="contact-us__li">Entre em contato</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
