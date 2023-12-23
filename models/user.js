const { DataTypes } = require('sequelize');
const sequelize = require('../config/config'); // Import your Sequelize instance

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  balance: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 10000,
  },
}, {
  // Other model configurations
});

module.exports = User;
