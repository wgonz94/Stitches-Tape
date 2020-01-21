import React, { Component } from 'react';
import MeasureImg from '../Components/Tables/MeasureImg';

import NewMeasurement from '../Components/Tables/NewMeasurement';
import '../Components/Tables/Measure.css';

class MeasureWrapper extends Component {
  render() {
    return (
      <div>
        <h2 className='center'>New Measurements</h2>
        <div className='row'>
          <div className='col s12 l6'>
            <MeasureImg />
          </div>
          <div className='col s12 l6'>
            <NewMeasurement />
          </div>
        </div>
      </div>
    );
  }
}

export default MeasureWrapper;
