module.exports = function(sequelize, DataTypes) {
  var Measurement = sequelize.define(
    "Measurement",
    {
      id: clientId,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      designerId: {
        type: DataTypes.INTEGER
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
        type: DataTypes.INTEGER
      },
      headOverTop: {
        type: DataTypes.INTEGER
      },
      neckAround: {
        type: DataTypes.INTEGER
      },
      neckHeightFront: {
        type: DataTypes.INTEGER
      },
      neckHeightBack: {
        type: DataTypes.INTEGER
      },
      bust: {
        type: DataTypes.INTEGER
      },
      bustFront: {
        type: DataTypes.INTEGER
      },
      bustBack: {
        type: DataTypes.INTEGER
      },
      bustPointToPoint: {
        type: DataTypes.INTEGER
      },
      chest: {
        type: DataTypes.INTEGER
      },
      chestFront: {
        type: DataTypes.INTEGER
      },
      shoulderFront: {
        type: DataTypes.INTEGER
      },
      shoulderBack: {
        type: DataTypes.INTEGER
      },
      shoulderSeam: {
        type: DataTypes.INTEGER
      },
      slope: {
        type: DataTypes.INTEGER
      },
      shoulderTipToWaistFront: {
        type: DataTypes.INTEGER
      },
      shoulderTipToWaistBack: {
        type: DataTypes.INTEGER
      },
      armsyceFront: {
        type: DataTypes.INTEGER
      },
      armholeSnug: {
        type: DataTypes.INTEGER
      },
      underArmSeam: {
        type: DataTypes.INTEGER
      },
      waist: {
        type: DataTypes.INTEGER
      },
      waistToFloor: {
        type: DataTypes.INTEGER
      },
      waistToBelowKnee: {
        type: DataTypes.INTEGER
      },
      neckToWaistFront: {
        type: DataTypes.INTEGER
      },
      neckToWaistBack: {
        type: DataTypes.INTEGER
      },
      neckToFloor: {
        type: DataTypes.INTEGER
      },
      hipAtBones: {
        type: DataTypes.INTEGER
      },
      hipToWaist: {
        type: DataTypes.INTEGER
      },
      largeHip: {
        type: DataTypes.INTEGER
      },
      inseam: {
        type: DataTypes.INTEGER
      },
      kneeToAnkle: {
        type: DataTypes.INTEGER
      },
      upperThigh: {
        type: DataTypes.INTEGER
      },
      upperThighFlexed: {
        type: DataTypes.INTEGER
      },
      knee: {
        type: DataTypes.INTEGER
      },
      kneeFlexed: {
        type: DataTypes.INTEGER
      },
      calf: {
        type: DataTypes.INTEGER
      },
      ankle: {
        type: DataTypes.INTEGER
      },
      overallRise: {
        type: DataTypes.INTEGER
      },
      riseFront: {
        type: DataTypes.INTEGER
      },
      riseBack: {
        type: DataTypes.INTEGER
      },
      armLength: {
        type: DataTypes.INTEGER
      },
      overArm: {
        type: DataTypes.INTEGER
      },
      armToElbow: {
        type: DataTypes.INTEGER
      },
      elbowToWrist: {
        type: DataTypes.INTEGER
      },
      bicep: {
        type: DataTypes.INTEGER
      },
      bicepFlexed: {
        type: DataTypes.INTEGER
      },
      elbow: {
        type: DataTypes.INTEGER
      },
      wrist: {
        type: DataTypes.INTEGER
      },
      handOrFist: {
        type: DataTypes.INTEGER
      },
      notes: {
        type: DataTypes.TEXT
      }
    },
    {
      classMethods: {
        associate: function(models) {
          Measurement.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }
  );

  return Measurement;
};
