import React, { Component } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import '../css/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <Hero></Hero>
      </div>
    );
  }
}

export default App;
