// models/EmoTag.js
const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const EmoTag = sequelize.define('EmoTag', {
  tagno: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(20), allowNull: false }
});

module.exports = EmoTag;

