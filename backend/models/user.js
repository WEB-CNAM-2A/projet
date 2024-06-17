const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize'); // Adjust path as needed

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  nom: {
    type: DataTypes.STRING
  },
  prenom: {
    type: DataTypes.STRING
  },
  adresse: {
    type: DataTypes.STRING
  },
  ville: {
    type: DataTypes.STRING
  },
  codepostal: {
    type: DataTypes.INTEGER
  },
  telephone: {
    type: DataTypes.INTEGER
  },
  email: {
    type: DataTypes.STRING
  },
  civilite: {
    type: DataTypes.STRING
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pays: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'users',
  timestamps: false // Set to true if your table has createdAt and updatedAt fields
});

module.exports = User;
