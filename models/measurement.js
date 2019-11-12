module.exports = function(sequelize, DataTypes) {
  var Measurement = sequelize.define(
    "Measurement",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      designerId: {
        type: DataTypes.INTEGER
      },
      project: {
        type: DataTypes.STRING
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
        type: DataTypes.DECIMAL(6, 2)
      },
      headOverTop: {
        type: DataTypes.DECIMAL(6, 2)
      },
      neckAround: {
        type: DataTypes.DECIMAL(6, 2)
      },
      neckHeightFront: {
        type: DataTypes.DECIMAL(6, 2)
      },
      neckHeightBack: {
        type: DataTypes.DECIMAL(6, 2)
      },
      bust: {
        type: DataTypes.DECIMAL(6, 2)
      },
      bustFront: {
        type: DataTypes.DECIMAL(6, 2)
      },
      bustBack: {
        type: DataTypes.DECIMAL(6, 2)
      },
      bustPointToPoint: {
        type: DataTypes.DECIMAL(6, 2)
      },
      chest: {
        type: DataTypes.DECIMAL(6, 2)
      },
      chestFront: {
        type: DataTypes.DECIMAL(6, 2)
      },
      shoulderFront: {
        type: DataTypes.DECIMAL(6, 2)
      },
      shoulderBack: {
        type: DataTypes.DECIMAL(6, 2)
      },
      shoulderSeam: {
        type: DataTypes.DECIMAL(6, 2)
      },
      slope: {
        type: DataTypes.DECIMAL(6, 2)
      },
      shoulderTipToWaistFront: {
        type: DataTypes.DECIMAL(6, 2)
      },
      shoulderTipToWaistBack: {
        type: DataTypes.DECIMAL(6, 2)
      },
      armsyceFront: {
        type: DataTypes.DECIMAL(6, 2)
      },
      armholeSnug: {
        type: DataTypes.DECIMAL(6, 2)
      },
      underArmSeam: {
        type: DataTypes.DECIMAL(6, 2)
      },
      waist: {
        type: DataTypes.DECIMAL(6, 2)
      },
      waistToFloor: {
        type: DataTypes.DECIMAL(6, 2)
      },
      waistToBelowKnee: {
        type: DataTypes.DECIMAL(6, 2)
      },
      neckToWaistFront: {
        type: DataTypes.DECIMAL(6, 2)
      },
      neckToWaistBack: {
        type: DataTypes.DECIMAL(6, 2)
      },
      neckToFloor: {
        type: DataTypes.DECIMAL(6, 2)
      },
      hipAtBones: {
        type: DataTypes.DECIMAL(6, 2)
      },
      hipToWaist: {
        type: DataTypes.DECIMAL(6, 2)
      },
      largeHip: {
        type: DataTypes.DECIMAL(6, 2)
      },
      inseam: {
        type: DataTypes.DECIMAL(6, 2)
      },
      kneeToAnkle: {
        type: DataTypes.DECIMAL(6, 2)
      },
      upperThigh: {
        type: DataTypes.DECIMAL(6, 2)
      },
      upperThighFlexed: {
        type: DataTypes.DECIMAL(6, 2)
      },
      knee: {
        type: DataTypes.DECIMAL(6, 2)
      },
      kneeFlexed: {
        type: DataTypes.DECIMAL(6, 2)
      },
      calf: {
        type: DataTypes.DECIMAL(6, 2)
      },
      ankle: {
        type: DataTypes.DECIMAL(6, 2)
      },
      overallRise: {
        type: DataTypes.DECIMAL(6, 2)
      },
      riseFront: {
        type: DataTypes.DECIMAL(6, 2)
      },
      riseBack: {
        type: DataTypes.DECIMAL(6, 2)
      },
      armLength: {
        type: DataTypes.DECIMAL(6, 2)
      },
      overArm: {
        type: DataTypes.DECIMAL(6, 2)
      },
      armToElbow: {
        type: DataTypes.DECIMAL(6, 2)
      },
      elbowToWrist: {
        type: DataTypes.DECIMAL(6, 2)
      },
      bicep: {
        type: DataTypes.DECIMAL(6, 2)
      },
      bicepFlexed: {
        type: DataTypes.DECIMAL(6, 2)
      },
      elbow: {
        type: DataTypes.DECIMAL(6, 2)
      },
      wrist: {
        type: DataTypes.DECIMAL(6, 2)
      },
      handOrFist: {
        type: DataTypes.DECIMAL(6, 2)
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
