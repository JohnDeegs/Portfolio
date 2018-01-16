import React, { Component } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Selected from './Selected';
import Projects from './Projects';
import Footer from './Footer';
import '../css/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <Hero></Hero>
        <Selected></Selected>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
