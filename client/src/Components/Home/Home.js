import React, { Component } from 'react'
import Title from './Title'
import Divider from './Parallax'
import About from './About'

export class Home extends Component {
  render() {
    return (
      <div>
        <Title />
        <Divider />
        <About />
      </div>
    )
  }
}

export default Home
