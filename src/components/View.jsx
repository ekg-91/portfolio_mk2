import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';

class View extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/About' component={ About } />
        <Route exact path='/Projects' component={ Projects } />
        <Route exact path='/Resume' component={ Resume } />
        <Route exact path='/Contact' component={ Contact } />
      </Switch>
    );
  }
}

export default View;
