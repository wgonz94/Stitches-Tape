import React, { useState, useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import "./Measure.css";

const Measurement = () => {
  const [state, setState] = useState([
    { value: null, id: "clientName", name: "Client Name" },
    { value: null, id: "projectName", name: "Project Name" },
    { value: null, id: "email", name: "Email" },
    { value: null, id: "phone", name: "Phone Number" },
    { value: null, id: "suitSize", name: "Suit Size" },
    { value: null, id: "dressSize", name: "Dress Size" },
    { value: null, id: "shirtSize", name: "Shirt Size" },
    { value: null, id: "pantWaist", name: "Pant Waist" },
    { value: null, id: "pantInseam", name: "Pant Inseam" },
    { value: null, id: "hatSize", name: "Hat Size" },
    { value: null, id: "shoeSize", name: "Shoe Size" },
    { value: null, id: "height", unit: "in", name: "Height" },
    { value: null, id: "weight", unit: "", name: "Weight" },
    { value: null, id: "hairColor", name: "Hair Color" },
    { value: null, id: "eyeColor", name: "Eye Color" },
    { value: null, id: "handedness", name: "Handedness" },
    { value: null, id: "colorPref", name: "Color Preferences" },
    { value: null, id: "headDiam", unit: "", name: "Head Diameter" },
    { value: null, id: "headOver", unit: "", name: "Head Over" },
    { value: null, id: "neck", unit: "", name: "Neck" },
    { value: null, id: "neckFront", unit: "", name: "Neck Front" },
    { value: null, id: "neckBack", unit: "", name: "Neck Back" },
    { value: null, id: "bust", unit: "", name: "Bust" },
    { value: null, id: "chest", unit: "", name: "Chest" },
    { value: null, id: "bustFront", unit: "", name: "Bust Front" },
    { value: null, id: "bustBack", unit: "", name: "Bust Back" },
    { value: null, id: "bustPtp", unit: "", name: "Bust Point-to-Point" },
    { value: null, id: "chestFront", unit: "", name: "Chest Front" },
    { value: null, id: "shoulderFront", unit: "", name: "Shoulder Front" },
    { value: null, id: "shoulderBack", unit: "", name: "Shoulder Back" },
    { value: null, id: "shoulderSeam", unit: "", name: "Shoulder Seam" },
    { value: null, id: "slope", unit: "", name: "Slope" },
    {
      value: null,
      id: "shoulderCtrFront",
      unit: "",
      name: "Shoulder, Center to Front"
    },
    {
      value: null,
      id: "shoulderCtrBack",
      unit: "",
      name: "Shoulder, Center to Back"
    },
    { value: null, id: "armscyeFront", unit: "", name: "Armscye, Front" },
    { value: null, id: "armholeSnug", unit: "", name: "Armhole, Snug" },
    { value: null, id: "underarmSeam", unit: "", name: "Underarm Seam" },
    { value: null, id: "waist", unit: "", name: "Waist" },
    {
      value: null,
      id: "neckToWaistFront",
      unit: "",
      name: "Neck to Waist, Front"
    },
    {
      value: null,
      id: "neckToWaistBack",
      unit: "",
      name: "Neck to Waist, Back"
    },
    { value: null, id: "hipAtHipbone", unit: "", name: "Hip at Hipbone" },
    { value: null, id: "hipWaist", unit: "", name: "Hip to Waist" },
    { value: null, id: "lgHipAcross", unit: "", name: "Large Hip, Across" },
    { value: null, id: "lgHipVert", unit: "", name: "Large Hip, Vertical" },
    { value: null, id: "neckToFloor", unit: "", name: "Neck to Floor" },
    { value: null, id: "waistToFloor", unit: "", name: "Waist to Floor" },
    {
      value: null,
      id: "waistToBelowKnee",
      unit: "",
      name: "Waist to Below Knee"
    },
    { value: null, id: "inseam", unit: "", name: "Inseam" },
    { value: null, id: "kneeToAnkle", unit: "", name: "Knee to Ankle" },
    { value: null, id: "upperThigh", unit: "", name: "Upper Thigh" },
    {
      value: null,
      id: "upperThighFlexed",
      unit: "",
      name: "Upper Thigh, Flexed"
    },
    { value: null, id: "knee", unit: "", name: "Knee" },
    { value: null, id: "kneeFlexed", unit: "", name: "Knee, Flexed" },
    { value: null, id: "calf", unit: "", name: "Calf" },
    { value: null, id: "ankle", unit: "", name: "Ankle" },
    { value: null, id: "overallRise", unit: "", name: "Overall Rise" },
    { value: null, id: "riseFront", unit: "", name: "Rise, Front" },
    { value: null, id: "riseBack", unit: "", name: "Rise, back" },
    { value: null, id: "armLength", unit: "", name: "Arm Length" },
    { value: null, id: "overarm", unit: "", name: "Overarm" },
    { value: null, id: "armToElbow", unit: "", name: "Arm to Elbow" },
    { value: null, id: "elbowToWrist", unit: "", name: "Elbow to Wrist" },
    { value: null, id: "bicep", unit: "", name: "Bicep" },
    { value: null, id: "bicepFlexed", unit: "", name: "Bicep, Flexed" },
    { value: null, id: "elbow", unit: "", name: "Elbow" },
    { value: null, id: "wrist", unit: "", name: "Wrist" },
    { value: null, id: "hand", unit: "", name: "Hand" },
    { value: null, id: "custom1", unit: "", name: "Custom 1" },
    { value: null, id: "custom2", unit: "", name: "Custom 2" },
    { value: null, id: "custom3", unit: "", name: "Custom 3" },
    { value: null, id: "custom4", unit: "", name: "Custom 4" },
    { value: null, id: "custom5", unit: "", name: "Custom 5" },
    {
      value: "",
      id: "notes",
      name: "Notes"
    }
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
        <ul className='measurements'>
          {state.map((initState, index) => (
            <li
              className='col s12 m4'
              id={initState.id}
              value={initState.value}
            >
              {initState.name} : {initState.value} {initState.unit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Measurement;
