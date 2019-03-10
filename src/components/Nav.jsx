import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div class='navbar is-primary columns'>
        <div class='navbar-brand column is-half'>
          <h1 class='has-text-white is-large'>EKG Software Engineering</h1>
          <div role='button' class='navbar-burger' aria-label='menu' aria-expanded='false'>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </div>
        </div>
        <div class='navbar-menu column is-half'>
          <div class='navbar-start'>
            <div class='button navbar-item'><Link to='/'>Home</Link></div>
            <div class='button navbar-item'><Link to='/About'>About</Link></div>
            <div class='button navbar-item'><Link to='/Projects'>Projects</Link></div>
            <div class='button navbar-item'><Link to='/Resume'>Resumé</Link></div>
            <div class='button navbar-item'><Link to='/Contact'>Contact</Link></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
