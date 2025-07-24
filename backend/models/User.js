// models/User.js
'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    role: { type: DataTypes.STRING, defaultValue: 'user' },
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    age: DataTypes.INTEGER,
  }, {
    timestamps: true,
  });

  // Associations (nếu có)
  // User.associate = function(models) {
  //   ...
  // };

  return User;
};
