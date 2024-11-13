// models/Diary.js
const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Diary = sequelize.define('Diary', {
  diaryno: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING(20), allowNull: false },
  content: { type: DataTypes.STRING(1000) },
  weather: { type: DataTypes.INTEGER, defaultValue: 0 },
  view_scope: { type: DataTypes.BOOLEAN, defaultValue: false },
  lat: { type: DataTypes.DECIMAL(9, 6) },
  lng: { type: DataTypes.DECIMAL(9, 6) }
});

module.exports = Diary;

