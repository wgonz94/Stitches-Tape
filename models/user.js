module.exports = (sequelize, DataTypes) => {
  const bcrypt = require("bcrypt");
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        isEmail: true
      },
      wantsUpdates: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {}
  );

  User.beforeCreate((user, options) => {
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(user.password, salt);
  });
    
   
  User.prototype.validPassword = function(password) {
          return bcrypt.compareSync(password, this.password);
        }; 
        
  User.associate = function(models) {
    User.hasMany(models.Measurement, {
      onDelete: "cascade"
    });
  };

  return User;
};
