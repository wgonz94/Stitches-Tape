module.exports = (sequelize, DataTypes) => {
  const Measurement = sequelize.define(
    "Measurement",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        isEmail: true
      },
      designerId: {
        type: DataTypes.INTEGER
      },
      project: {
        type: DataTypes.STRING
      },
      colorPreferences: {
        type: DataTypes.TEXT
      },
      dressSize: {
        type: DataTypes.STRING
      },
      suitSize: {
        type: DataTypes.STRING
      },
      shirtSize: {
        type: DataTypes.STRING
      },
      pantsWaist: {
        type: DataTypes.STRING
      },
      pantsInseam: {
        type: DataTypes.STRING
      },
      tightsSize: {
        type: DataTypes.STRING
      },
      hatSize: {
        type: DataTypes.STRING
      },
      shoeSize: {
        type: DataTypes.STRING
      },
      handed: {
        type: DataTypes.STRING
      },
      height: {
        type: DataTypes.STRING
      },
      weight: {
        type: DataTypes.STRING
      },
      hair: {
        type: DataTypes.STRING
      },
      eyes: {
        type: DataTypes.STRING
      },
      headAround: {
        type: DataTypes.STRING
      },
      headOverTop: {
        type: DataTypes.STRING
      },
      neckAround: {
        type: DataTypes.STRING
      },
      neckHeightFront: {
        type: DataTypes.STRING
      },
      neckHeightBack: {
        type: DataTypes.STRING
      },
      bust: {
        type: DataTypes.STRING
      },
      bustFront: {
        type: DataTypes.STRING
      },
      bustBack: {
        type: DataTypes.STRING
      },
      bustPointToPoint: {
        type: DataTypes.STRING
      },
      chest: {
        type: DataTypes.STRING
      },
      chestFront: {
        type: DataTypes.STRING
      },
      shoulderFront: {
        type: DataTypes.STRING
      },
      shoulderBack: {
        type: DataTypes.STRING
      },
      shoulderSeam: {
        type: DataTypes.STRING
      },
      slope: {
        type: DataTypes.STRING
      },
      shoulderTipToWaistFront: {
        type: DataTypes.STRING
      },
      shoulderTipToWaistBack: {
        type: DataTypes.STRING
      },
      armsyceFront: {
        type: DataTypes.STRING
      },
      armholeSnug: {
        type: DataTypes.STRING
      },
      underArmSeam: {
        type: DataTypes.STRING
      },
      waist: {
        type: DataTypes.STRING
      },
      waistToFloor: {
        type: DataTypes.STRING
      },
      waistToBelowKnee: {
        type: DataTypes.STRING
      },
      neckToWaistFront: {
        type: DataTypes.STRING
      },
      neckToWaistBack: {
        type: DataTypes.STRING
      },
      neckToFloor: {
        type: DataTypes.STRING
      },
      hipAtBones: {
        type: DataTypes.STRING
      },
      hipToWaist: {
        type: DataTypes.STRING
      },
      largeHip: {
        type: DataTypes.STRING
      },
      inseam: {
        type: DataTypes.STRING
      },
      kneeToAnkle: {
        type: DataTypes.STRING
      },
      upperThigh: {
        type: DataTypes.STRING
      },
      upperThighFlexed: {
        type: DataTypes.STRING
      },
      knee: {
        type: DataTypes.STRING
      },
      kneeFlexed: {
        type: DataTypes.STRING
      },
      calf: {
        type: DataTypes.STRING
      },
      ankle: {
        type: DataTypes.STRING
      },
      overallRise: {
        type: DataTypes.STRING
      },
      riseFront: {
        type: DataTypes.STRING
      },
      riseBack: {
        type: DataTypes.STRING
      },
      armLength: {
        type: DataTypes.STRING
      },
      overArm: {
        type: DataTypes.STRING
      },
      armToElbow: {
        type: DataTypes.STRING
      },
      elbowToWrist: {
        type: DataTypes.STRING
      },
      bicep: {
        type: DataTypes.STRING
      },
      bicepFlexed: {
        type: DataTypes.STRING
      },
      elbow: {
        type: DataTypes.STRING
      },
      wrist: {
        type: DataTypes.STRING
      },
      handOrFist: {
        type: DataTypes.STRING
      },
      notes: {
        type: DataTypes.TEXT
      }
    },
    {}
  );

  Measurement.associate = function(models) {
    Measurement.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Measurement;
};
