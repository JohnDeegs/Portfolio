import React, { Component } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Selected from './Selected';
import Projects from './Projects';
import '../css/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <Hero></Hero>
        <Selected></Selected>
        <Projects></Projects>
      </div>
    );
  }
}

export default App;
