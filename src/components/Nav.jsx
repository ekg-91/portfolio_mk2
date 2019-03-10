import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Hero } from 'react-bulma-components';

// import logo from '../images/EKGlogo.jpg'; //TODO: put the logo back in

class Nav extends Component {
  state={
    isActive: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <div class='navbar has-background-light'>
        <div class='navbar-brand'>
          {/*<img src={ logo } alt='logo' class='navbar-item size-2' style={{}} />*/}
          <h1 class='has-text-dark is-large navbar-item'>EKG Software Engineering</h1>
          <div role='button' class='navbar-burger' aria-label='menu' aria-expanded='false' onClick={this.toggleNav}>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </div>
        </div>
        <div class={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div class='navbar-end'>
            <Button
              renderAs={Link}
              to='/'
              color='primary'
              size='3'
              style={{ margin:5 }}
              >Home
            </Button>
            <Button
              renderAs={Link}
              to='/About'
              color='primary'
              size='3'
              style={{ margin:5 }}
              >About
            </Button>
            <Button
              renderAs={Link}
              to='/Projects'
              color='primary'
              size='3'
              style={{ margin:5 }}
              >Projects
            </Button>
            <Button
              renderAs={Link}
              to='/Resume'
              color='primary'
              size='3'
              style={{ margin:5 }}
              >Resumé
            </Button>
            <Button
              renderAs={Link}
              to='/Contact'
              color='primary'
              size='3'
              rounded
              outlined
              style={{ margin:5 }}
              >Contact
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
