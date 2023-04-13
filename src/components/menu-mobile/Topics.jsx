import React, { Component } from 'react';
import './Menu.css';
import menu from '../../images/close.png'
import about from '../../images/about.png'
import menuweb from '../../images/menuweb.png'
import portfolio from '../../images/portfolio.png'
import contact from '../../images/contact.png'

class Topics extends Component {
  render() {
    const {eventClick} = this.props;
    return (
      <div>
        <ul className='topics__list'>
          <button id='btn__close' onClick={eventClick}><img src={menu} alt="Botão para fechar tópicos" id='icon-close'/></button>

          <li> 
            <img src={about} alt="icone do tópico sobre nós" className='icon-topics' />
            <a href="#aboutUs" className='linkstyle-none' onClick={this.handleClick}>Sobre nós</a>
          </li>
          
          <li>
            <img src={menuweb} alt="icone do tópico menus web" className='icon-topics' />
            <a href="#menuweb" className='linkstyle-none' >Menus Web</a>
          </li>

          <li>
            <img src={portfolio} alt="icone do tópico portfólio" className='icon-topics' />
            <a href="#portfolio" className='linkstyle-none' >Portfólio</a>
          </li>

          <li>
          <img src={contact} alt="icone do tópico entre em contato" className='icon-topics' />
            <a href="#contact" className='linkstyle-none' >Entre em contato</a>
          </li>

        </ul>
      </div>
    )
  }
}

export default Topics;