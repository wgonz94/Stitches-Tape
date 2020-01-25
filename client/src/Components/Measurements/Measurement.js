import React, { useState, useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import "./Measure.css";

const Measurement = () => {
  const [state, setState] = useState([
    { value: null, id: "clientName" },
    { value: null, id: "projectName" },
    { value: null, id: "email" },
    { value: null, id: "phone" },
    { value: null, id: "suitSize" },
    { value: null, id: "dressSize" },
    { value: null, id: "shirtSize" },
    { value: null, id: "pantWaist" },
    { value: null, id: "pantInseam" },
    { value: null, id: "hatSize" },
    { value: null, id: "shoeSize" },
    { value: null, id: "height", unit: "in" },
    { value: null, id: "weight", unit: "" },
    { value: null, id: "hairColor" },
    { value: null, id: "eyeColor" },
    { value: null, id: "handedness" },
    { value: null, id: "colorPref" },
    { value: null, id: "headDiam", unit: "" },
    { value: null, id: "headOver", unit: "" },
    { value: null, id: "neck", unit: "" },
    { value: null, id: "neckFront", unit: "" },
    { value: null, id: "neckBack", unit: "" },
    { value: null, id: "bust", unit: "" },
    { value: null, id: "chest", unit: "" },
    { value: null, id: "bustFront", unit: "" },
    { value: null, id: "bustBack", unit: "" },
    { value: null, id: "bustPtp", unit: "" },
    { value: null, id: "chestFront", unit: "" },
    { value: null, id: "shoulderFront", unit: "" },
    { value: null, id: "shoulderBack", unit: "" },
    { value: null, id: "shoulderSeam", unit: "" },
    { value: null, id: "slope", unit: "" },
    { value: null, id: "shoulderCtrFront", unit: "" },
    { value: null, id: "shoulderCtrBack", unit: "" },
    { value: null, id: "armscyeFront", unit: "" },
    { value: null, id: "armholeSnug", unit: "" },
    { value: null, id: "underarmSeam", unit: "" },
    { value: null, id: "waist", unit: "" },
    { value: null, id: "neckToWaistFront", unit: "" },
    { value: null, id: "neckToWaistBack", unit: "" },
    { value: null, id: "hipAtHipbone", unit: "" },
    { value: null, id: "hipWaist", unit: "" },
    { value: null, id: "lgHipAcross", unit: "" },
    { value: null, id: "lgHipVert", unit: "" },
    { value: null, id: "neckToFloor", unit: "" },
    { value: null, id: "waistToFloor", unit: "" },
    { value: null, id: "waistToBelowKnee", unit: "" },
    { value: null, id: "inseam", unit: "" },
    { value: null, id: "kneeToAnkle", unit: "" },
    { value: null, id: "upperThigh", unit: "" },
    { value: null, id: "upperThighFlexed", unit: "" },
    { value: null, id: "knee", unit: "" },
    { value: null, id: "kneeFlexed", unit: "" },
    { value: null, id: "calf", unit: "" },
    { value: null, id: "ankle", unit: "" },
    { value: null, id: "overallRise", unit: "" },
    { value: null, id: "riseFront", unit: "" },
    { value: null, id: "riseBack", unit: "" },
    { value: null, id: "armLength", unit: "" },
    { value: null, id: "overarm", unit: "" },
    { value: null, id: "armToElbow", unit: "" },
    { value: null, id: "elbowToWrist", unit: "" },
    { value: null, id: "bicep", unit: "" },
    { value: null, id: "bicepFlexed", unit: "" },
    { value: null, id: "elbow", unit: "" },
    { value: null, id: "wrist", unit: "" },
    { value: null, id: "hand", unit: "" },
    { value: null, id: "custom1", unit: "" },
    { value: null, id: "custom2", unit: "" },
    { value: null, id: "custom3", unit: "" },
    { value: null, id: "custom4", unit: "" },
    { value: null, id: "custom5", unit: "" },
    { value: null, id: "notes" },
    { isImperial: true }
  ]);

  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className='measurements'
      style={{
        backgroundColor: theme.bgc
      }}
    >
      <h3 className='center'>Client Info</h3>
      <div className='row'>
        {state.map((initState, index) => (
          <div
            className='input-field col s3 readback'
            style={{
              background: theme.bgc
            }}
          >
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
