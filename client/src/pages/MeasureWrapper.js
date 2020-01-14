import React, { Component } from 'react';
import LeftWindow from '../Components/Tables/LeftWindow';
import RightWindow from '../Components/Tables/RightWindow';

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
