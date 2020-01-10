import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

class Divider extends Component {

  render() {
    return(
      <div>
       <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../../Images/midbg.jpg')}
            bgImageAlt="Sewing Supplies"
            strength={-200}
        >
          
            <div style={{ height: '500px' }} />
        </Parallax>
        </div>
      )
  }
  
}

export default Divider;