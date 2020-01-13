import React, { Component } from 'react';
import Header from './Header';
import Title from './Title';
import Divider from './Parallax';
import About from './About';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Title />
        <Divider />
        <About />
      </div>
    );
  }
}

export default Home;
