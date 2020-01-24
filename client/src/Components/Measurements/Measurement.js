import React, { useState } from "react";

const Measurement = () => {
  const [state, setState] = useState([
    { value: "Devyn Barron", id: "clientName" },
    { value: "Devyn Stuff", id: "projectName" },
    { value: "ckbrogue@gmail.com", id: "email" },
    { value: 9092726583, id: "phone" },
    { value: 55, id: "suitSize" },
    { value: 55, id: "dressSize" },
    { value: 55, id: "shirtSize" },
    { value: 55, id: "pantWaist" },
    { value: 55, id: "pantInseam" },
    { value: 55, id: "hatSize" },
    { value: 55, id: "shoeSize" },
    { value: 55, id: "height" },
    { value: 55, id: "weight" },
    { value: 55, id: "hairColor" },
    { value: 55, id: "eyeColor" },
    { value: 55, id: "handedness" },
    { value: 55, id: "colorPref" },
    { value: "unchecked", id: "units" },
    { value: 55, id: "headDiam" },
    { value: 55, id: "headOver" },
    { value: 55, id: "neck" },
    { value: 55, id: "neckFront" },
    { value: 55, id: "neckBack" },
    { value: 55, id: "bust" },
    { value: 55, id: "chest" },
    { value: 55, id: "bustFront" },
    { value: 55, id: "bustBack" },
    { value: 55, id: "bustPtp" },
    { value: 55, id: "chestFront" },
    { value: 55, id: "shoulderFront" },
    { value: 55, id: "shoulderBack" },
    { value: 55, id: "shoulderSeam" },
    { value: 55, id: "slope" },
    { value: 55, id: "shoulderCtrFront" },
    { value: 55, id: "shoulderCtrBack" },
    { value: 55, id: "armscyeFront" },
    { value: 55, id: "armholeSnug" },
    { value: 55, id: "underarmSeam" },
    { value: 55, id: "waist" },
    { value: 55, id: "neckToWaistFront" },
    { value: 55, id: "neckToWaistBack" },
    { value: 55, id: "hipAtHipbone" },
    { value: 55, id: "hipWaist" },
    { value: 55, id: "lgHipAcross" },
    { value: 55, id: "lgHipVert" },
    { value: 55, id: "neckToFloor" },
    { value: 55, id: "waistToFloor" },
    { value: 55, id: "waistToBelowKnee" },
    { value: 55, id: "inseam" },
    { value: 55, id: "kneeToAnkle" },
    { value: 55, id: "upperThigh" },
    { value: 55, id: "upperThighFlexed" },
    { value: 55, id: "knee" },
    { value: 55, id: "kneeFlexed" },
    { value: 55, id: "calf" },
    { value: 55, id: "ankle" },
    { value: 55, id: "overallRise" },
    { value: 55, id: "riseFront" },
    { value: 55, id: "riseBack" },
    { value: 55, id: "armLength" },
    { value: 55, id: "overarm" },
    { value: 55, id: "armToElbow" },
    { value: 55, id: "elbowToWrist" },
    { value: 55, id: "bicep" },
    { value: 55, id: "bicepFlexed" },
    { value: 55, id: "elbow" },
    { value: 55, id: "wrist" },
    { value: 55, id: "hand" },
    { value: 55, id: "custom1" },
    { value: 55, id: "custom2" },
    { value: 55, id: "custom3" },
    { value: 55, id: "custom4" },
    { value: 55, id: "custom5" },
    {
      value:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam iure tempora quia nihil nisi, soluta totam explicabo sint a. Saepe, magnam? Facilis nesciunt tempore ipsum harum quo vitae facere tenetur.",
      id: "notes"
    }
  ]);

  return (
    <div className='measurements'>
      <h3 className='center'>Client Info</h3>
      <div className='row'>
        {state.map((initState, index) => (
          <div className='input-field col s3 readback'>
            <p id={initState.id} value={initState.value}>
              {initState.value}
            </p>
            <label htmlFor={initState.id} className='active'>
              {initState.id}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Measurement;
