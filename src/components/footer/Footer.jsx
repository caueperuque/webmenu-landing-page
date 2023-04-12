import React, { Component } from 'react'
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
        <h3>Nossas redes sociais:</h3>
        </div>
        <div className='footer__container-social'>
          <a href="https://wa.me/+5518996640040" target="_blank" rel="noreferrer" className='footer__icon-img'>
            <FaWhatsapp className='footer__icon-img'/>
          </a>
          <a href="https://www.instagram.com/web__menu/" target="_blank" rel="noreferrer" className='footer__icon-img'>
            <FaInstagram className='footer__icon-img'/>
          </a>
          <a href="mailto:webmenu.cj@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope className='footer__icon-img'/>
          </a>
    </div>
      </footer>
    )
  }
}

export default Footer