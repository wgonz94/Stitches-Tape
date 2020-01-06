// require dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const MeasurementSchema = new Schema({
  clientName: {
    type: String,
    required: true
  },
  clientEmail: {
    type: String,
    required: true
  },
  clientPhone: String,
  projectName: {
    type: String,
    required: true
  },
  colorPreferences: String,
  dressSize: String,
  suitSize: String,
  shirtSize: String,
  pantsWaist: String,
  pantsInseam: String,
  tightsSize: String,
  hatSize: String,
  shoeSize: String,
  handed: String,
  height: String,
  weight: String,
  hair: String,
  eyes: String,
  headAround: String,
  headOverTop: String,
  neckAround: String,
  neckHeightFront: String,
  neckHeightBack: String,
  bust: String,
  bustFront: String,
  bustBack: String,
  bustPointToPoint: String,
  chest: String,
  chestFront: String,
  shoulderFront: String,
  shoulderBack: String,
  shoulderSeam: String,
  slope: String,
  shoulderTipToWaistFront: String,
  shoulderTipToWaistBack: String,
  armsyceFront: String,
  armholeSnug: String,
  underArmSeam: String,
  waist: String,
  waistToFloor: String,
  waistToBelowKnee: String,
  neckToWaistFront: String,
  neckToWaistBack: String,
  neckToFloor: String,
  hipAtBones: String,
  hipToWaist: String,
  largeHipAcross: String,
  largeHipVertical: String,
  inseam: String,
  kneeToAnkle: String,
  upperThigh: String,
  upperThighFlexed: String,
  knee: String,
  kneeFlexed: String,
  calf: String,
  ankle: String,
  overallRise: String,
  riseFront: String,
  riseBack: String,
  armLength: String,
  overArm: String,
  armToElbow: String,
  elbowToWrist: String,
  bicep: String,
  bicepFlexed: String,
  elbow: String,
  wrist: String,
  handAsFist: String,
  customMeasurement1: String,
  customMeasurement2: String,
  customMeasurement3: String,
  customMeasurement4: String,
  customMeasurement5: String,
  notes: String
});

module.exports = Measurement = mongoose.model('measurement', MeasurementSchema);


//   Measurement.associate = function(models) {
//     Measurement.belongsTo(models.User, {
//       foreignKey: {
//         allowNull: false
//       }
//     });
//   };

