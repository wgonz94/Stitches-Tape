import React from 'react';
import MeasureImg from '../../Images/MeasureImg.jpg';
import './Measure.css';

const MeasureImage = () => {
  return (
    <div>
      <img
        src={MeasureImg}
        className='models responsive-img center'
        alt='Measurement Examples 1'
      />
    </div>
  );
};

export default MeasureImage;
