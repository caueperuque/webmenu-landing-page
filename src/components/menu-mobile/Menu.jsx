import React, { Component } from 'react';
import menu from '../../images/menu.png'
import './Menu.css'

class Menu extends Component {
  state = {
    active: false,
  }

  toogleMode = () => {
    const { active } = this.state;
    this.setState({
      active: !active,
    })
    return active ? (
      <div className='teste'>
        Menu
      </div>
    ) : 
    (<div className='teste2'>
      Menu
    </div>)
  }
  render() {
    return (
      <img src={menu} alt="" className='menu-icon' onClick={this.toogleMode}/>
    )
  }
}

export default Menu