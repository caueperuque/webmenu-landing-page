import React, { Component } from 'react';
import './Menu.css';

class Topics extends Component {
  state = {
    enable: false,
  }

  handleClick = () => {
    this.setState({
      enable: !this.state.enable,
    })
  }

  render() {
    const { enable } = this.state;
    return (
      <div>
        <ul className='topics__list'>
          <li><a href="#aboutUs" className='linkstyle-none' onClick={this.handleClick}>Sobre nós</a></li>
          <li><a href="#menuweb" className='linkstyle-none' >Menus Web</a></li>
          <li><a href="#portfolio" className='linkstyle-none' >Portfólio</a></li>
          <li><a href="#contact" className='linkstyle-none' >Entre em contato</a></li>
        </ul>
      </div>
    )
  }
}

export default Topics;