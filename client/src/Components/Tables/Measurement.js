import React, { Component } from 'react';

const initState = {
  name: 'name',
  project: 'projectName',
  email: 'email',
  phone: 'phone',
  formal: 'formalSize',
  sord: 'suitOrDress',
  shirtsz: 'shirtSize',
  pantwst: 'pantWaist',
  pantinsm: 'pantInseam',
  hat: 'hat',
  shoe: 'shoeSize',
  height: 'height',
  weight: 'weight',
  hair: 'hair',
  eye: 'eye',
  handedness: 'handedness',
  colorPref: 'colorPreference',
  unit: 'unitMeasure',
  headdia: 'headDiam',
  headovr: 'headOver',
  neck: 'neck',
  neckhtfr: 'neckHeightFront',
  neckhtbk: 'neckHeightBack',
  bust: 'bust',
  chest: 'chest',
  bustfr: 'bustFront',
  bustbk: 'bustBack',
  bustptp: 'bustPointToPoint',
  chestfr: 'chestFront',
  shldrfr: 'shoulderFront',
  shldrbk: 'shoulderBack',
  shldrsm: 'shoulderSeam',
  slope: 'slope',
  sttcwf: 'shoulderTipToCenterWaistFront',
  sttcwb: 'shoulderTipToCenterWaistBack',
  armscye: 'armscyeFront',
  armhole: 'armholeSnug',
  underarm: 'underarmSeam',
  waist: 'waist',
  ntwf: 'neckToWaistFront',
  ntwb: 'neckToWaistBack',
  hipathipbone: 'hipAtTheHipbone',
  hipwaist: 'hipToWaist',
  lghpacr: 'largeHipAcross',
  lghpvrt: 'largeHipVertical',
  neckflr: 'neckToFloor',
  waistflr: 'neckToWaist',
  waistblwkn: 'waistToJustBelowKnee',
  inseam: 'inseam',
  kneeankle: 'kneeToAnkle',
  upperth: 'upperThigh',
  upperthflx: 'upperThighFlexed',
  calf: 'calf',
  ankle: 'ankle',
  ovrrise: 'overallRise',
  risefr: 'riseFront',
  risebk: 'riseBack',
  armlgth: 'armLength',
  overarm: 'overarm',
  armtoelbow: 'armToElbow',
  elbowtowrist: 'elbowToWrist',
  bicep: 'bicep',
  bicepflx: 'bicepFlexed',
  elbow: 'elbow',
  wrist: 'wrist',
  hand: 'handBalledIntoAFist',
  custom1: 'custom1',
  custom2: 'custom2',
  custom3: 'custom3',
  custom4: 'custom4',
  custom5: 'custom5',
  notes: 'notes'
};

class Measurement extends Component {
  state = initState;

  checkMap = () => {
    console.log(this.state.map(function(initState) {}));
  };

  render() {
    return (
      <div>
        <h1></h1>
        <h1 onClick={this.checkMap}>Hello</h1>
      </div>
    );
  }
}

export default Measurement;
