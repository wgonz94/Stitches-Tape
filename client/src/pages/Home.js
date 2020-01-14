import React, { Component } from 'react';
import Header from '../Components/Home/Header';
import Title from '../Components/Home/Title';
import About from '../Components/Home/About';
import Parallax from '../Components/Home/Parallax';

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
