import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div>
        <h1>EKG Software Engineering</h1>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/About'>About</NavLink></li>
          <li><NavLink to='/Projects'>Projects</NavLink></li>
          <li><NavLink to='/Resume'>Resumé</NavLink></li>
          <li><NavLink to='/Contact'>Contact</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Nav;
