import React, { Component } from 'react';
import menu from '../../images/menu.png'
import './Menu.css'
import Topics from './Topics';

class Menu extends Component {
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
      <>
        <button className='myBtn' onClick={this.handleClick}><img src={menu} alt="" className='menu-icon'/></button>
        { enable && <Topics eventClick={this.handleClick}/> }
      </>
    );
  }
}

export default Menu