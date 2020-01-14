import React, { Component } from 'react';
import LeftWindow from '../Components/Tables/LeftWindow';
import RightWindow from '../Components/Tables/RightWindow';

class MeasureWrapper extends Component {
  render() {
    return (
      <main>
        <div className='row'>
          <div className='col s10 m6'>
            <LeftWindow />
          </div>
          <div className='col s10 m6'>
            <RightWindow />
          </div>
        </div>
      </main>
    );
  }
}

export default MeasureWrapper;
