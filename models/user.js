module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isDesigner: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  return User;
};
