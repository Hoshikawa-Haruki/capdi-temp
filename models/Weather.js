// models/Weather.js
const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Weather = sequelize.define('Weather', {
  wno: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  wname: { type: DataTypes.STRING(20), allowNull: false },
  wimage: { type: DataTypes.STRING(1000) }
});

module.exports = Weather;

