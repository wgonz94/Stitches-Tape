module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      firstName: {
        type: DataTypes.STRING
      },
      lastName: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phoneNumber: {
        type: DataTypes.STRING
      },
      colorPreferences: {
        type: DataTypes.TEXT
      },
      isDesigner: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      classMethods: {
        associate: function(models) {
          User.hasMany(models.Measurement);
        }
      }
    }
  );

  return User;
};
