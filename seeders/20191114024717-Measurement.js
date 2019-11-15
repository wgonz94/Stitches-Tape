"use strict";

const faker = require("faker");

var db = require("../models");
let measurements = [];
var clients = [
  { userId: 1, email: "Maxime.Hamill@gmail.com" },
  { userId: 3, email: "Clinton.Mueller74@yahoo.com" },
  { userId: 5, email: "Timmy69@hotmail.com" },
  { userId: 6, email: "Loyce89@gmail.com" },
  { userId: 7, email: "Edgar38@yahoo.com" },
  { userId: 9, email: "Arnold_Boehm98@hotmail.com" },
  { userId: 10, email: "Samir36@gmail.com" }
];
var designersIds = [2, 4, 8, 11];
let shoes = [
  "5",
  "5.5",
  "6",
  "6.5",
  "7",
  "7.5",
  "8",
  "8.5",
  "9",
  "9.5",
  "10",
  "10.5",
  "11",
  "11.5",
  "12",
  "12.5",
  "13",
  "13.5",
  "14"
];
let colors = [
  "blue, gray",
  "gray",
  "blue",
  "red",
  "pink, white",
  "green",
  "green, yellow",
  "orange",
  "white",
  "black",
  "black, red",
  "black, white"
];
let heights = [
  "6'",
  "6'3",
  "5'9",
  "5'5",
  "5'7",
  "6'2",
  "6'1",
  "5'2",
  "5'3",
  "5'11",
  "5'10"
];
let hairColor = [
  "blonde",
  "light brown",
  "dark brown",
  "black",
  "red",
  "purple",
  "pink",
  "green",
  "gray"
];
let eyeColor = ["brown", "hazel", "green", "blue", "black"];

db.User.findAll({}).then(results => {
  console.log(results);
  let design = [];
  let testClient = [];
  for (var i = 0; i < results.length; i++) {
    if (results[i].isDesigner) {
      design.push(results[i].id);
    } else {
      testClient.push({
        userId: results[i].id,
        email: results[i].email
      });
    }
  }
  console.log(design);
  console.log(testClient);
  return results;
});

for (var m = 0; m < clients.length; m++) {
  let newMeasure = {
    email: clients[m].email,
    designerId: designersIds[Math.floor(Math.random() * designersIds.length)],
    project: faker.random.words(),
    colorPreferences: colors[Math.floor(Math.random() * colors.length)],
    dressSize: null,
    suitSize: null,
    shirtSize: null,
    pantsWaist: null,
    pantsInseam: null,
    tightsSize: null,
    hatSize: null,
    shoeSize: shoes[Math.floor(Math.random() * shoes.length)],
    handed: null,
    height: heights[Math.floor(Math.random() * heights.length)],
    weight: Math.floor((Math.random() * 300) + 120),
    hair: hairColor[Math.floor(Math.random() * hairColor.length)],
    eyes: eyeColor[Math.floor(Math.random() * eyeColor.length)],
    headAround: null,
    headOverTop: null,
    neckAround: null,
    neckHeightFront: null,
    neckHeightBack: null,
    bust: Math.floor((Math.random() * 60) + 28),
    bustFront: null,
    bustBack: null,
    bustPointToPoint: null,
    chest: Math.floor((Math.random() * 60) + 28),
    chestFront: null,
    shoulderFront: null,
    shoulderBack: null,
    shoulderSeam: null,
    slope: null,
    shoulderTipToWaistFront: null,
    shoulderTipToWaistBack: null,
    armsyceFront: null,
    armholeSnug: null,
    underArmSeam: null,
    waist: Math.floor((Math.random() * 60) + 28),
    waistToFloor: null,
    waistToBelowKnee: null,
    neckToWaistFront: null,
    neckToWaistBack: null,
    neckToFloor: null,
    hipAtBones: null,
    hipToWaist: null,
    largeHip: null,
    inseam: Math.floor(Math.random() * 50 + 23),
    kneeToAnkle: null,
    upperThigh: Math.floor((Math.random() * 30) + 10),
    upperThighFlexed: null,
    knee: null,
    kneeFlexed: null,
    calf: Math.floor((Math.random() * 10) + 3),
    ankle: null,
    overallRise: null,
    riseFront: null,
    riseBack: null,
    armLength: Math.floor((Math.random() * 20) + 10),
    overArm: null,
    armToElbow: null,
    elbowToWrist: null,
    bicep: Math.floor((Math.random() * 20) + 12),
    bicepFlexed: null,
    elbow: null,
    wrist: null,
    handOrFist: null,
    notes: faker.lorem.sentences(),
    createdAt: new Date(),
    updatedAt: new Date(),
    UserId: clients[m].userId
  };
  measurements.push(newMeasure);
}

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert("Measurements", measurements, {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("Measurements", null, {});
  }
};
