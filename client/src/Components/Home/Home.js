import React, { Component } from 'react';
import Header from './Header';
import Title from './Title';
import About from './About';
import Parallax from './Parallax';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Title />
        <Parallax />
        <About />
      </div>
    );
  }
}

export default Home;
