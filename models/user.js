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
        unique: true,
        isEmail: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phoneNumber: {
        type: DataTypes.STRING
      },
      isDesigner: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {}
  );

  User.associate = function(models) {
    User.hasMany(models.Measurement, {
      onDelete: "cascade"
    });
  };

  return User;
};
