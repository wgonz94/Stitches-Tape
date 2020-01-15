import React, { Component } from 'react';
// import LeftWindow from '../Components/Tables/LeftWindow';
// import RightWindow from '../Components/Tables/RightWindow';
import MeasureImg from '../Components/Tables/MeasureImg';
import NewMeasurement from '../Components/Tables/NewMeasurement';
import '../Components/Tables/Measure.css';

class MeasureWrapper extends Component {
  render() {
    return (
      <div>
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
