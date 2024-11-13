// models/SumTag.js
const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const SumTag = sequelize.define('SumTag', {
  tagno: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(20), allowNull: false }
});

module.exports = SumTag;

