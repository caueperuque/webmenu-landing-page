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
            <li id="about-us__li"><a href="#aboutUs" className='link-nostyle'>Sobre nós</a></li>
            <li id="about-web-menu__li"><a href="#aboutUs" className='link-nostyle'>Menus Web</a></li>
            <li id="portfolio__li"><a href="#aboutUs" className='link-nostyle'>Portfólio</a></li>
            <li id="contact-us__li"><a href="#aboutUs" className='link-nostyle'>Entre em contato</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
