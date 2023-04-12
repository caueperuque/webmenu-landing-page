import React, { Component } from 'react';
import menu from '../../images/menu.png'
import './Menu.css'

class Menu extends Component {
  handleClick = () => {
    console.log('Olá');
  }
  render() {
    return (
      <button className='myBtn' onClick={this.handleClick}><img src={menu} alt="" className='menu-icon' onClick={this.toogleMode}/></button>
    )
  }
}

export default Menu