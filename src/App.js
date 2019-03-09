import React, { Component } from 'react';

import Nav from './components/Nav.jsx';
import View from './components/View.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <View />
      </div>
    );
  }
}

export default App;
