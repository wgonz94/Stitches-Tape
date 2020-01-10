import React, { Component } from 'react';
import LeftWindow from './LeftWindow';
import RightWindow from './RightWindow';

class MeasureWrapper extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col s6'>
          <LeftWindow />
        </div>
        <div className='col s6'>
          <RightWindow />
        </div>
      </div>
    );
  }
}

export default MeasureWrapper;
